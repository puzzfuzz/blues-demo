import {
  WILL_FETCH_USERS,
  DID_FETCH_USERS,
  DID_NOT_FETCH_USERS
} from './actionTypes/userAT'

import {getUsers} from "../api/BluesAPI";


function willFetchUsers() {
  return {
    type: WILL_FETCH_USERS
  };
}

function didFetchUsers(users) {
  return {
    type: DID_FETCH_USERS,
    payload: {
      users
    }
  }
}

function didNotFetchUsers(error) {
  return {
    type: DID_NOT_FETCH_USERS,
    payload: {
      error
    }
  }
}

export const fetchUsers = (async (getState, dispatch) => {
  dispatch(willFetchUsers());
  try {
    const users = await getUsers();
    dispatch(didFetchUsers(users));
  } catch (e) {
    dispatch(didNotFetchUsers(e.message));
  }
});
