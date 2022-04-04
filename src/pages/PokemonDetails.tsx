import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Axios from "axios";
import api from 'api';
import { PokemonInterface } from 'interfaces';
import { GetImageById, SetPadStart } from 'helper/utils';
import { PokemonType, PokemonStats, PokemonEvolutions } from 'components';
import { PoundToKg } from 'helper/utils';
import CircularProgress from '@mui/material/CircularProgress';

function PokemonsDetails() {
  const { id } = useParams() ?? 1;
  console.log('id', id);

  const [pokemonInfo, setpokemonInfo] = useState<PokemonInterface>();
  const [pokePic, setPokePic] = useState<string>('');
  const [pokeEvolution, setPokeEvolution] = useState<PokemonInterface['chain']>();

  useEffect(() => {
    if (id) {
      setPokePic(GetImageById(Number(id)));

      const fetchData = async (id: number) => {
        const pokemonObject: any = await api.getPokemonById(id);
        setpokemonInfo(pokemonObject);

        const pokeSpecies = await api.getPokemonEvolution(pokemonObject.species.name);
        const pokeEvolution = await Axios.get(pokeSpecies.evolution_chain.url);
        setPokeEvolution(pokeEvolution.data.chain);
      }
      fetchData(Number(id));
    }
  }, [id]);

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