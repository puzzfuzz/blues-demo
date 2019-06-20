import { combineReducers } from "redux";

import users from './users';
import fleets from'./fleets';

export default combineReducers({
  users,
  fleets
});
