import {
  WILL_FETCH_USERS,
  DID_FETCH_USERS,
  DID_NOT_FETCH_USERS
} from './actionTypes/userAT'

import {getUsers} from "../api/BluesAPI";
import {navigate} from "@reach/router";


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

/**
 * List all users or accounts viewable by the current logged in session
 * @returns {Promise<void>} async thunk
 */
export const fetchUsers = async (dispatch) => {
  dispatch(willFetchUsers());
  try {
    const users = await getUsers();
    dispatch(didFetchUsers(users));
  } catch (e) {
    dispatch(didNotFetchUsers(e.message));
    console.error(e);
  }
};


/**
 * Navigate to a view of all fleets visible to a specific user
 * @param userId {string} Id of user to view available fleets for
 */
export const navigateToFleetsForUser = (userId) => {
  return () => {
    navigate(`/fleets/${userId}`);
    return null;
  };
};
