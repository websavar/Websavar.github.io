import React, { Suspense } from 'react';
import { GetImageById, SetPadStart } from 'helper/utils';
import { PokemonsInterface } from 'interfaces';
import { placeholder } from 'constants/index';

const LazyImg = React.lazy(() => import('./ImageResource'));

const PokemonCard: React.FC<{ pokemon: PokemonsInterface, id: number }> = ({ pokemon, id }) => {

  return (
    <div className="d-flex flex-column align-items-center pokemon-card">
      <div className='image-container'>
        <Suspense fallback={<img src={placeholder} width='100px' alt='placeholder' />}>
          <LazyImg src={GetImageById(id)} alt={pokemon.name} />
        </Suspense>
      </div>
      <span className='pokemon-name'>{pokemon.name}</span>
      <span>#{SetPadStart(id)}</span>
    </div>
  )
}

export default PokemonCard;