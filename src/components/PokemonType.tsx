import React from 'react';
import { PokemonInterface } from 'interfaces';

const PokemonType: React.FC<{ pokemonInfo: PokemonInterface }> = ({ pokemonInfo }) => {

  return (
    <div className='pokemon-types mb-2'>
      <strong>Type:</strong>
      {
        pokemonInfo.types.map(item => {
          return <span key={item.type.name}>{item.type.name}</span>
        })
      }
    </div>
  )
}

export default PokemonType;