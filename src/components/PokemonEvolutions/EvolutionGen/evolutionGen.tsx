import React from "react";
import { Link } from "react-router-dom";

import { EvolutionInterface } from 'interfaces';
import { GetImageById } from 'helper/utils';


const EvolutionGen: React.FC<{ evolution: EvolutionInterface }> = ({ evolution }) => {
  console.log('EvolutionGen', evolution.name);

  return (
    <div className='evolution-item d-flex flex-row flex-md-column align-items-center justify-content-around text-center border rounded p-1'>
      <div>
        <span className="pokemon-name">{evolution.name}</span>
        <span className="pokemon-number">
          # {evolution.id.toString().padStart(3, "0")}
        </span>
      </div>
      <figure className="m-0">
        <Link to={`/pokemons/${evolution.id}`}>
          <img
            src={GetImageById(Number(evolution.id))} width="90"
            className="border rounded-circle p-1"
          />
        </Link>
      </figure>
    </div>
  );
};

export default EvolutionGen;