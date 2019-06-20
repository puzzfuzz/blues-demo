import React from 'react';
import { Router } from '@reach/router';
// import Home from "./Home";
import BreedSearch from "./BreedSearch";
import UserLoginRC from "./UserLoginRC";
import UserFleetsRC from "./UserFleetsRC";
import FleetRC from "./FleetRC";


const AppRouter = () => {
  return(
    <Router>
      <UserLoginRC path="/" />
      {/*
        Routes here aren't the best but due to needing someplace for the userId for the demo, this was the simplest.
        UserID here would be pulled out of session, but this is simpler for demo purposes.

        I would prefer to have the below,

        /fleets/
        /fleets/:fleetId
      */}
      <UserFleetsRC path="/fleets/:userId" />
      <FleetRC path="/fleet/:fleetId" />
      <BreedSearch path="search/:query" />
    </Router>
  );
};

export default AppRouter;
