import Axios from "axios";
import { HTTP_METHODS } from "constants/enums";
import { networkLogger } from '../helper/utils';
import '../global';

const apiUrl: string = 'https://pokeapi.co';
const apiVersion = process.env.REACT_APP_API_VERSION;
const enableNetworkLogger: boolean = false;

const axios = Axios.create({
  baseURL: `${apiUrl}/api/v${apiVersion}/`
});

export const createApiRequest = async (
  url: string,
  method: HTTP_METHODS,
  data: any
) => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    });
    return response.data;
  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }
};

axios.interceptors.response.use(
  function (response) {
    if (enableNetworkLogger) {
      networkLogger(response);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;