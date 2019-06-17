import React from 'react';
import { Router } from '@reach/router';
import Home from "./Home";
import BreedSearch from "./BreedSearch";


const AppRouter = () => {
  return(
    <Router>
      <Home path="/" />
      <BreedSearch path="search/:query" />
    </Router>
  );
};

export default AppRouter;
