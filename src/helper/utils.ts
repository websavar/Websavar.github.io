import { PokemonInterface } from 'interfaces';

export const networkLogger = (response: any) => {
  if (response?.config?.url) {
    console.log(response?.config?.baseURL + response?.config?.url);
  }
  if (response?.config?.params) {
    console.log({ params: response.config.params });
  }
  if (response?.config?.data) {
    console.log({ data: response.config.data });
  }
  if (response?.data) {
    console.log({ data: response.data });
  }
  console.log({ response });
};

export const GetImageById = (id: number): string => {
  return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + SetPadStart(id) + ".png";
}

export const SetPadStart = (num: number): string => {
  return num.toString().padStart(3, "0");
}

export const GetIdByUrl = (species: PokemonInterface['species']): number => {
  return Number(species.url.split("/").slice(-2)[0]);
}

export const PoundToKg = (weight: number): string => {
  return (weight / 10).toFixed(1);
}

export const HasVerticalScrollbar = (): boolean => {
  const pokemonsContainerHeight = document.querySelector('#pokemons-container>div')!.scrollHeight;
  const mainContainerHeight = document.querySelector('#main-container')!.scrollHeight;
  return pokemonsContainerHeight > mainContainerHeight;
} 
