import React, { useState, useEffect } from 'react';
import api from 'api';
import { Link } from "react-router-dom";
import { PokemonsInterface } from 'interfaces';
import { PortalName, LIMIT, MAX_POKEMONS } from "constants/index";
import InfiniteScroll from "react-infinite-scroll-component";
import { PokemonCard } from 'components';
import CircularProgress from '@mui/material/CircularProgress';
import { HasVerticalScrollbar } from 'helper/utils';

let offset = 0;

function Pokemons() {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<PokemonsInterface[]>([]);

  const fetchData = async () => {
    let limit = LIMIT;
    if (offset > MAX_POKEMONS) {
      limit = LIMIT - (offset - MAX_POKEMONS);
      setHasMore(false);
    }
    const pokeList = await api.getPokemons(limit, offset);
    offset += LIMIT;
    setPokemons([...pokemons, ...pokeList]);
  }

  useEffect(() => {
    if (!HasVerticalScrollbar() && hasMore)
      fetchData();
  }, [pokemons.length])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchNextPokemons = () => {
    setTimeout(() => {
      fetchData();
    }, 500);
  }

  return (
    <>
      {
        <InfiniteScroll
          style={{ overflow: "none" }}
          dataLength={pokemons.length}
          next={fetchNextPokemons}
          hasMore={hasMore}
          scrollableTarget={'pokemons-container'}
          loader={
            <div className="my-4 d-flex justify-content-center align-item-center">
              <CircularProgress />
            </div>
          }
          endMessage={
            <p className="text-center my-3">
              <strong>You have seen it all!</strong>
            </p>
          }
        >
          <div className="row">
            {pokemons.map((pokemon: PokemonsInterface, index: number) => (
              <Link
                to={`/${PortalName}/${index + 1}`}
                className="col-12 col-sm-6 col-md-4 col-lg-3 p-0"
                key={index + 1}
              >
                <PokemonCard pokemon={pokemon} id={index + 1} />
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      }
    </>
  );
}

export default Pokemons;