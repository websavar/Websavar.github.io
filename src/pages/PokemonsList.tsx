import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { PortalName, LIMIT, MAX_POKEMONS, COUNT } from "constants/index";
import { useGetPokemons, useGetPokemon, getPokemonQuery } from 'helper/hooks';
import { GetIdByUrl } from 'helper/utils';
import { PokemonCard } from 'components';
import { CircularProgress, Pagination } from 'mui';
import { PokemonsInterface, PokemonProps } from 'interfaces';

const PokemonsList: React.FC<PokemonProps> = ({ getPokemonInfo }) => {

  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [pokemonId, setPokemonId] = useState<number>(1);

  const queryClient = useQueryClient();
  const { id } = useParams();

  useEffect(() => {
    function resetList() {
      setOffset(0);
      setPage(1);
    }
    if (pokemons && !id) resetList();
  }, [id]);

  const pageChangeHandler = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setOffset((value - 1) * LIMIT);
  };

  const { data: pokemons, isLoading, error } = useGetPokemons(
    (offset + LIMIT) > MAX_POKEMONS ? (MAX_POKEMONS - (offset)) : LIMIT,
    offset
  );

  const { data: pokemonInfo, isFetched } = useGetPokemon(pokemonId);

  const onMouseClick = async (id: number) => {
    if (pokemonInfo && isFetched) getPokemonInfo(pokemonInfo);

    try {
      const data = await getPokemonQuery(queryClient, id);
      if (data) getPokemonInfo(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  if (isLoading || pokemons === undefined)
    return (
      <div className="my-4 d-flex justify-content-center align-item-center">
        <CircularProgress />
      </div>);
  else if (error)
    return <div>"An error has occurred: " + {error}</div>;

  return (
    <>
      <div className="row">
        {pokemons.map((pokemon: PokemonsInterface) => {
          const id: number = GetIdByUrl(pokemon.url);
          return (
            <Link
              to={`/${PortalName}/${id}`}
              className='col-12 col-sm-6 col-md-4 col-lg-3 p-0'
              id={'id-' + id.toString()}
              key={id}
              onMouseEnter={() => setPokemonId(id)}
              onClick={() => onMouseClick(id)}
            >
              <PokemonCard pokemon={pokemon} id={id} />
            </Link>
          );
        })}
      </div>
      <div className='d-flex justify-content-center my-2' id='pagination'>
        <Pagination
          count={COUNT}
          variant='outlined'
          shape='rounded'
          page={page}
          onChange={pageChangeHandler}
        />
      </div>
    </>
  );
}

export default PokemonsList;