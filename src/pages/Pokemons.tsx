import React, { useState } from 'react';
import { PokemonInterface } from 'interfaces';

import PokemonsList from "pages/PokemonsList";
import PokemonDetails from "pages/PokemonDetails";

const Pokemons: React.FC = () => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInterface>();

  const passPokemonInfo = (data: PokemonInterface): void => {
    setPokemonInfo(data);
  }

  return (
    <div className="container-fluid" id='main-container'>
      <div className='row vh-100'>
        <div className='col-12 col-sm-6 col-lg-7 col-xl-8 mt-3 mt-sm-0' id='pokemons-container'>
          <PokemonsList passPokemonInfo={passPokemonInfo} />
        </div>

        <div className='col-12 col-sm-6 col-lg-5 col-xl-4 order-first order-sm-last p-2' id='pokemon-container'>
          <PokemonDetails pokemonData={pokemonInfo} />
        </div>
      </div>
    </div>
  );
}

export default Pokemons;