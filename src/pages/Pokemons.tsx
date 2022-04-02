import React, { useState, useEffect } from 'react';
import api from 'api';
import { Link } from "react-router-dom";
import { PokemonsInterface } from 'interfaces';
import { PortalName } from "constants/index";
import { GetImageById, SetPadStart } from 'helper/utils';

function Pokemons() {

  const [pokedex, setPokedex] = useState<PokemonsInterface[]>([]);

  useEffect(() => {
    const fetchData = async (limit: number) => {
      const data = await api.getPokemons(limit);
      console.log('Pokemons', data);

      setPokedex(data);
    }
    fetchData(10);
  }, []);

  const pokedexList = pokedex.map((pokemon: PokemonsInterface, index: number) => {
    return (
      <Link to={`/${PortalName}/${index + 1}`} className="col-12 col-sm-6 col-md-4 col-lg-3 p-0" key={index}>
        <div
          key={SetPadStart(index + 1)}
          className="d-flex flex-column align-items-center pokemon-card"
        >
          <div className='image-container'>
            <img src={GetImageById(index + 1)} width="100 " alt={pokemon.name} />
          </div>
          <span className='pokemon-name'>{pokemon.name}</span>
          <span>#{SetPadStart(index + 1)}</span>
        </div>
      </Link>
    )
  });

  return (
    <div className="row">
      {/* <div className='col-12 d-flex flex-wrap'> */}
      {pokedexList}
      {/* </div> */}
    </div>
  );
}

export default Pokemons;