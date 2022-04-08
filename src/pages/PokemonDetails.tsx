import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useQueryClient } from 'react-query';
import { PokemonInterface } from 'interfaces';
import { GetImageById, SetPadStart, PoundToKg } from 'helper/utils';
import { usePrevious, getPokemonQuery, getPokemonSpeciesQuery, getPokemonEvolutionQuery } from 'helper/hooks';
import { PokemonType, PokemonStats, PokemonEvolutions } from 'components';
import CircularProgress from '@mui/material/CircularProgress';

const PokemonsDetails: React.FC<{ pokemonData: PokemonInterface | undefined }> = ({ pokemonData }) => {
  const { id } = useParams() ?? 1;
  const queryClient = useQueryClient();

  const [pokemonInfo, setPokemonInfo] = useState<PokemonInterface | undefined>(pokemonData);
  const [pokePic, setPokePic] = useState<string>('');
  const [pokeEvolution, setPokeEvolution] = useState<PokemonInterface['chain']>();

  useEffect(() => {
    const fetchEvo = async (): Promise<void> => {
      setPokePic(GetImageById(pokemonInfo!.id));
      const pokeSpecies = await getPokemonSpeciesQuery(queryClient, pokemonInfo!.species.name);
      const pokeEvolution = await getPokemonEvolutionQuery(queryClient, pokeSpecies.evolution_chain.url);
      setPokeEvolution(pokeEvolution.data.chain);
    }
    if (pokemonInfo) fetchEvo();
  }, [pokemonInfo]);

  const prevAmount = usePrevious({ id, pokemonData });

  useEffect(() => {
    const fetchQuery = async (id: number): Promise<void> => {
      const data = await getPokemonQuery(queryClient, id);
      if (data) setPokemonInfo(data);
    };

    if (!id) {
      fetchQuery(1);
    }
    else if (prevAmount?.pokemonData !== pokemonData) {
      setPokemonInfo(pokemonData)
    }
    else if (id && (prevAmount?.id !== id || !prevAmount?.id)) {
      fetchQuery(Number(id));
    }
  }, [id, pokemonData]);


  if (!pokemonInfo) return (
    <div className="my-4 d-flex justify-content-center align-item-center">
      <CircularProgress />
    </div>
  );

  return (
    <div className='pokemon-details h-100'>
      <div className="pokemon-info">
        <div className='d-flex align-items-md-center flex-column flex-md-row mb-3'>
          <h2 className='me-3'>{pokemonInfo.species.name}</h2>
          <span><strong>ID #{SetPadStart(pokemonInfo.id)}</strong></span>
        </div>

        <PokemonType pokemonInfo={pokemonInfo} />

        <div>
          <strong>Weight:</strong> {PoundToKg(pokemonInfo.weight)} Kg
        </div>

        <div className="pokemon-pic">
          <img src={pokePic} alt="pic of pokemon" />
        </div>

        <PokemonStats pokemonInfo={pokemonInfo} />
      </div>

      {pokeEvolution && <PokemonEvolutions data={pokeEvolution} />}
    </div>
  );
}

export default PokemonsDetails;