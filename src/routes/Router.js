import React from 'react';
import { Router } from '@reach/router';
// import Home from "./Home";
import BreedSearch from "./BreedSearch";
import UserLoginRC from "./UserLoginRC";
import UserFleetsRC from "./UserFleetsRC";


const AppRouter = () => {
  return(
    <Router>
      <UserLoginRC path="/" />
      {/* UserID here would be pulled out of session, but this is simpler for demo purposes */}
      <UserFleetsRC path="fleets/:userId" />
      <BreedSearch path="search/:query" />
    </Router>
  );
};

export default AppRouter;
