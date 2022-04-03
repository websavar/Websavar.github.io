export interface PokemonsInterface {
  name: string
  url: string
}

interface NameUrl {
  name: string
  url: string
}

export interface PokemonInterface {
  name: string
  species: NameUrl
  id: number
  order: number
  weight: number
  number: string
  imageUrl: string
  types: {
    type: NameUrl
  }[]
  stats: {
    base_stat: number
    stat: NameUrl
  }[]
  chain: {
    evolves_to: {
      species: NameUrl
    }[]
    species: NameUrl
  }
}

export interface EvolutionInterface {
  children: {
    children: any;
    id: any;
    name: any;
  }[];
  id: number;
  name: string;
}

