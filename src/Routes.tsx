import React from 'react';
import { useRoutes } from 'react-router-dom';
import { PortalName } from "constants/index";

import Pokemons from "./pages/Pokemons";
import Page404 from "./pages/page404";

const Routes = () => useRoutes([
  { path: '/', element: <Pokemons /> },
  { path: '/' + PortalName + '/:id', element: <Pokemons /> },
  { path: '*', element: <Page404 /> },
]);

export default Routes;

