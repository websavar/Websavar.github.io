import React from 'react';
import { PokemonInterface } from 'interfaces';

const PokemonStats: React.FC<{ pokemonInfo: PokemonInterface }> = ({ pokemonInfo }) => {

  return (
    <fieldset className='fieldset-card mb-3'>
      <legend>Stats</legend>
      {pokemonInfo.stats.map((item, index) => {
        return (
          <div className='stats col-12 d-flex' key={index}>
            <div className='col-5'>{item.stat.name}</div>
            <div className='col-7'>{item.base_stat}</div>
          </div>
        )
      })}
    </fieldset>
  )
}

export default PokemonStats;