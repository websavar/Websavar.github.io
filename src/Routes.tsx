import React from 'react';
import { useRoutes } from 'react-router-dom';

import Pokemons from "./pages/Pokemons";
import PokemonDetails from "./pages/PokemonDetails";
import PageSelect from "./pages/PageSelect";
import Page404 from "./pages/page404";

import { PortalName } from "constants/index";

const Routes = () => useRoutes([
  { path: '/', element: <PageSelect /> },
  { path: '/' + PortalName + '/:id', element: <PokemonDetails /> },
  { path: '*', element: <Page404 /> },
]);

export default Routes;

