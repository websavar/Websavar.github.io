import { HTTP_METHODS } from "constants/enums";
import { createApiRequest } from "./axios";

class ApiCallCreator {
  getPokemons(limit: number, offset?: number) {
    return createApiRequest(
      `/pokemon/?limit=${limit}&offset=${offset}`,
      HTTP_METHODS.GET,
      {}
    )
      .then(res => res.results)
      .catch((e) => {
        console.log(`Error occurred while fetching data from the server ${e}`);
      });
  }
}

const api = new ApiCallCreator();

export default api;