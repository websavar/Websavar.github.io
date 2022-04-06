import { HTTP_METHODS } from "constants/enums";
import { createApiRequest } from "./axios";
import { useQuery } from "react-query";

const errorHandler = (e: any) => console.log(`Error occurred while fetching data from the server ${e}`);

class ApiCallCreator {
  getPokemons(limit?: number, offset?: number) {
    return createApiRequest(
      `/pokemon/?limit=${limit}&offset=${offset}`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res)
      .catch((e) => errorHandler(e));
  }

  getPokemonById(id: number) {
    return createApiRequest(
      `/pokemon/${id}/`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res)
      .catch((e) => errorHandler(e));
  }

  getPokemonByName(name: string) {
    return createApiRequest(
      `/pokemon/${name}/`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res)
      .catch((e) => errorHandler(e));
  }

  getPokemonEvolution(name: string) {
    return createApiRequest(
      `/pokemon-species/${name}`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res)
      .catch((e) => errorHandler(e));
  }
}

export const UseGetPokemonIndexList = (limit?: number, offset?: number) => {
  return useQuery("POKEMON_INDEX_LIST", () => api.getPokemons(limit, offset));
};

const api = new ApiCallCreator();

export default api;