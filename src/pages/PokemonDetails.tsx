import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Axios from "axios";
import api from 'api';
import { PokemonInterface } from 'interfaces';
import { GetImageById, SetPadStart } from 'helper/utils';
import { PokemonEvolutions } from 'components';
import { PoundToKg } from 'helper/utils';

function PokemonsDetails() {
  const { id } = useParams() ?? 1;
  console.log('id', id);

  const [pokeInfo, setPokeInfo] = useState<PokemonInterface>();
  const [pokePic, setPokePic] = useState<string>("");
  const [pokeEvolution, setPokeEvolution] = useState<PokemonInterface['chain']>();

  useEffect(() => {
    if (id) {
      setPokePic(GetImageById(Number(id)));

      const fetchData = async (id: number) => {
        const pokemonObject: any = await api.getPokemon(id);

        setPokeInfo(pokemonObject);

        const pokeSpecies = await api.getPokemonEvolution(pokemonObject.species.name);
        const pokeEvolution = await Axios.get(pokeSpecies.evolution_chain.url);

        setPokeEvolution(pokeEvolution.data.chain);
      }
      fetchData(Number(id));
    }
  }, [id]);

  if (!pokeInfo) return <div>Loading...</div>

  return (
    <div className='pokemon-details h-100'>
      <div className="pokemon-info">
        <div className='d-flex align-items-md-center flex-column flex-md-row mb-3'>
          <h2 className='me-3'>{pokeInfo.species.name}</h2>
          <span><strong>ID #{SetPadStart(pokeInfo.id)}</strong></span>
        </div>

        <div className='pokemon-types mb-2'>
          <strong>Type:</strong>
          {
            pokeInfo.types.map(item => {
              return <span key={item.type.name}>{item.type.name}</span>
            })
          }
        </div>

        <div>
          <strong>Weight:</strong> {PoundToKg(pokeInfo.weight)} Kg
        </div>

        <div className="pokemon-pic">
          <img src={pokePic} alt="pic of pokemon" />
        </div>

        <fieldset className='fieldset-card mb-3'>
          <legend>Stats</legend>
          {pokeInfo.stats.map((item, index) => {
            return (
              <div className='stats col-12 d-flex' key={index}>
                <div className='col-5'>{item.stat.name}</div>
                <div className='col-7'>{item.base_stat}</div>
              </div>
            )
          })}
        </fieldset>
      </div>

      {pokeEvolution && <PokemonEvolutions data={pokeEvolution} />}
    </div>
  );
}

export default PokemonsDetails;