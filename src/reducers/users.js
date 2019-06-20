import {
  WILL_FETCH_USERS,
  DID_FETCH_USERS,
  DID_NOT_FETCH_USERS
} from '../actions/actionTypes/userAT';


const initialState = {
  users: null,
  fetchingUsers: false,
  error: null
};

const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case WILL_FETCH_USERS:
      return {
        ...state,
        users: null,
        error: null,
        fetchingUsers: true
      };
    case DID_FETCH_USERS: {
      return {
        ...state,
        fetchingUsers: false,
        error: null,
        users: payload.users
      }
    }
    case DID_NOT_FETCH_USERS: {
      return {
        ...state,
        fetchingUsers: false,
        error: payload.error
      }
    }
    default:
      return state;
  }
};

export default users;
