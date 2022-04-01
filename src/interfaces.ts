export interface PokemonsInterface {
  name: string
  url: string
}

export interface PokemonInterface {
  // abilities: string
  species: {
    name: string
    url: string
  }
  id: number
  order: number
  weight: number
  imageUrl: string
  types: {
    type: {
      name: string
      url: string
    }
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
  evolves_to: {
    children: {
      children: any;
      id: any;
      name: any;
    }[];
    id: number;
    name: string;
  }[]
}
