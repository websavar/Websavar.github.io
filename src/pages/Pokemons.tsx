import React, { useState, useEffect } from 'react';
import api from 'api';
import { Link } from "react-router-dom";
import { PokemonsInterface } from 'interfaces';
import { PortalName, LIMIT, MAX_POKEMONS } from "constants/index";
import { PokemonCard } from 'components';
import CircularProgress from '@mui/material/CircularProgress';
import { GetIdByUrl } from 'helper/utils';
import { useQuery } from 'react-query';
import Pagination from '@mui/material/Pagination';

const Count = Math.ceil(MAX_POKEMONS / LIMIT);

const Pokemons: React.FC = () => {
  const [limit, setLimit] = useState<number>(LIMIT);
  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setOffset((value - 1) * limit);
    // if (value === Count)
    //   setLimit(MAX_POKEMONS - ((value - 1) * limit));
  };

  const fetchData = async ({ queryKey }: { queryKey: any }) => {
    console.log('offset', queryKey[2]);
    const pokeList = await api.getPokemons(queryKey[1], queryKey[2]);
    return pokeList.results;
  }

  const { data: pokemons, isLoading, error } = useQuery(
    ['pokemons', (offset + limit) > MAX_POKEMONS ? (MAX_POKEMONS - (offset)) : limit, offset],
    fetchData,
    { keepPreviousData: true });

  console.log('pokemons', pokemons);

  if (isLoading || pokemons === undefined)
    return (
      <div className="my-4 d-flex justify-content-center align-item-center">
        <CircularProgress />
      </div>);
  else if (error)
    return <div>"An error has occurred: " + {error}</div>;
  else
    return (
      <>
        <div className="row">
          {pokemons.map((pokemon: PokemonsInterface, index: number) => (
            <Link
              to={`/${PortalName}/${GetIdByUrl(pokemon.url)}`}
              className='col-12 col-sm-6 col-md-4 col-lg-3 p-0'
              key={GetIdByUrl(pokemon.url)}
            // onMouseEnter={}
            >
              <PokemonCard pokemon={pokemon} id={GetIdByUrl(pokemon.url)} />
            </Link>
          ))}
        </div>
        <div className='d-flex justify-content-center mt-2'>
          <Pagination
            count={Count}
            variant='outlined'
            shape='rounded'
            page={page}
            onChange={handleChange}
          />
        </div>
      </>
    );
}

export default Pokemons;