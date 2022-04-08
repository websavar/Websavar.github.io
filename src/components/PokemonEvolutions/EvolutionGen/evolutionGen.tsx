import React from "react";
import { Link } from "react-router-dom";

import { EvolutionInterface } from 'interfaces';
import { GetImageById } from 'helper/utils';

const LazyImg = React.lazy(() => import('../../ImageResource'));

const EvolutionGen: React.FC<{ evolution: EvolutionInterface }> = ({ evolution }) => {
  return (
    <div className='evolution-item d-flex flex-row flex-md-column align-items-center justify-content-around text-center border rounded p-1'>
      <div>
        <span className="pokemon-name">{evolution.name}</span>
        <span className="pokemon-number">
          # {evolution.id.toString().padStart(3, "0")}
        </span>
      </div>
      <figure className="m-0">
        <Link to={`/pokemons/${evolution.id}`} id={'id-evo-' + evolution.id}>
          <LazyImg
            src={GetImageById(Number(evolution.id))}
            alt='pokemon evolution'
            classname='border rounded-circle p-1'
            width='90'
          />
        </Link>
      </figure>
    </div>
  );
};

export default EvolutionGen;