import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { PortalName, LIMIT, MAX_POKEMONS, COUNT, MOBILE_WIDTH, DefaultPokemonId } from "constants/index";
import { useGetPokemons, useGetPokemon, getPokemonQuery } from 'helper/hooks';
import { GetIdByUrl } from 'helper/utils';
import { PokemonCard } from 'components';
import { CircularProgress, Pagination } from 'mui';
import { PokemonsInterface, PokemonProps } from 'interfaces';

const PokemonsList: React.FC<PokemonProps> = ({ passPokemonInfo }) => {

  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [pokemonId, setPokemonId] = useState<number>(DefaultPokemonId);

  const queryClient = useQueryClient();
  const { id } = useParams();

  useEffect(() => {
    // when page number > 1 and clicks on logo
    if (id === undefined) {
      setPage(1);
      setOffset(0);
      return;
    }
    // when page number > 1 and refresh the page
    const pageNumber = Math.ceil(Number(id) / LIMIT);
    const offsetNumner = (pageNumber - 1) * LIMIT;
    if (pageNumber !== page) {
      setPage(pageNumber);
      setOffset(offsetNumner);
    }
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

  const onCardClick = async (id: number) => {
    const isFetchedOnHover: boolean = Boolean(pokemonInfo) && isFetched;
    if (isFetchedOnHover) {
      passPokemonInfo(pokemonInfo!);
      return;
    }

    try {
      const data = await getPokemonQuery(queryClient, id);
      if (data) passPokemonInfo(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  const pagination = <div className='d-flex justify-content-center my-2' id='pagination'>
    <Pagination
      size={window.innerWidth < MOBILE_WIDTH ? "small" : 'medium'}
      count={COUNT}
      variant='outlined'
      shape='rounded'
      page={page}
      onChange={pageChangeHandler}
    />
  </div>;

  if (isLoading || pokemons === undefined)
    return (
      <div className="my-4 d-flex justify-content-center align-item-center">
        <CircularProgress />
      </div>)

  else if (error) return <div>"An error has occurred"</div>;

  return (
    <>
      {window.innerWidth < MOBILE_WIDTH && pagination}

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
              onClick={() => onCardClick(id)}
            >
              <PokemonCard pokemon={pokemon} id={id} />
            </Link>
          );
        })}
      </div>

      {pagination}
    </>
  );
}

export default PokemonsList;