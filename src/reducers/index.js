import { combineReducers } from "redux";

import users from './users';
import fleets from'./fleets';
import devices from './devices';

export default combineReducers({
  users,
  fleets,
  devices
});
