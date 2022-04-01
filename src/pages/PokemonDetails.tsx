import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from 'api';
import { PokemonInterface } from 'interfaces';
import { GetImageById, SetPadStart } from 'helper/utils';
import './pokemons.scss';

function PokemonsDetails() {
  const { id } = useParams() ?? 1;
  console.log('id', id);

  const [pokeInfo, setPokeInfo] = useState<PokemonInterface>();
  const [pokePic, setPokePic] = useState<string>("");

  useEffect(() => {
    if (id) {
      setPokePic(GetImageById(Number(id)));

      const fetchData = async (id: number) => {
        const pokemonObject: any = await api.getPokemon(id);
        console.log('Pokemon-details', pokemonObject);

        setPokeInfo(pokemonObject);
      }
      fetchData(Number(id));
    }
  }, [id]);

  if (!pokeInfo) return <div>Loading...</div>

  return (
    <div className='pokemon-details'>
      <div className="pokemon-info">
        <div className='d-flex align-items-center'>
          <h2 className='me-3'>{pokeInfo.species.name}</h2>
          <span>ID #{SetPadStart(pokeInfo.id)}</span>
        </div>

        <div className='pokemon-types'>
          {
            pokeInfo.types.map(item => {
              return <span key={item.type.name}>{item.type.name}</span>
            })
          }
        </div>
        <div className='row'>
          <h4>Stats</h4>
          {pokeInfo.stats.map((item, index) => {
            return (
              <div className='stats col-12 d-flex' key={index}>
                <div className='col-5'>{item.stat.name}</div>
                <div className='col-7'>{item.base_stat}</div>
              </div>
            )
          })}
        </div>
        <div>
          Weight: {pokeInfo.weight} lbs
        </div>
      </div>
      <div className="pokemon-pic">
        <img src={pokePic} alt="pic of pokemon" />
      </div>


    </div>
  );
}

export default PokemonsDetails;