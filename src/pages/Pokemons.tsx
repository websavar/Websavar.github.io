import React, { useState } from 'react';
import { PokemonInterface } from 'interfaces';

import PokemonsList from "pages/PokemonsList";
import PokemonDetails from "pages/PokemonDetails";

const Pokemons: React.FC = () => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInterface>();

  const getPokemonInfo = (data: PokemonInterface): void => {
    setPokemonInfo(data);
  }

  console.log('Pokemons-pokemonInfo', pokemonInfo);

  return (
    <div className="container-fluid" id='main-container'>
      <div className='row vh-100'>
        <div className='col-12 col-sm-6 col-lg-7 col-xl-8' id='pokemons-container'>
          <PokemonsList getPokemonInfo={getPokemonInfo} />
        </div>

        <div className='col-12 col-sm-6 col-lg-5 col-xl-4 order-first order-sm-last p-2' id='pokemon-container'>
          <PokemonDetails pokemonData={pokemonInfo} />
        </div>
      </div>
    </div>
  );
}

export default Pokemons;