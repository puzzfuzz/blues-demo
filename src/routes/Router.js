import React from 'react';
import { Router } from '@reach/router';
// import Home from "./Home";
import BreedSearch from "./BreedSearch";
import UserLogin from "./UserLogin";


const AppRouter = () => {
  return(
    <Router>
      <UserLogin path="/" />
      <BreedSearch path="search/:query" />
    </Router>
  );
};

export default AppRouter;
