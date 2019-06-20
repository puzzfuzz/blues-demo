import {
  WILL_FETCH_FLEETS,
  DID_FETCH_FLEETS_FOR_USER,
  DID_NOT_FETCH_FLEETS
} from './actionTypes/fleetAT'
import {getFleetForUser} from "../api/BluesAPI";
import {navigate} from "@reach/router";


function willFetchFleetsForUser(userId) {
  return {
    type: WILL_FETCH_FLEETS,
    payload: {
      userId
    }
  };
}

function didFetchFleetsForUser(userId, fleets) {
  return {
    type: DID_FETCH_FLEETS_FOR_USER,
    payload: {
      userId,
      fleets
    }
  }
}

function didNotFetchFleetsForUser(userId, error) {
  return {
    type: DID_NOT_FETCH_FLEETS,
    payload: {
      error
    }
  }
}

export const fetchFleetsForUser = ((userId) => {
  return async (dispatch) => {
    dispatch(willFetchFleetsForUser(userId));
    try {
      const fleets = await getFleetForUser(userId);
      dispatch(didFetchFleetsForUser(userId, fleets));
    } catch (e) {
      dispatch(didNotFetchFleetsForUser(userId, e.message));
      console.error(e);
    }
  };
});


export const navigateToFleet = (fleetId) => {
  return () => {
    navigate(`/fleet/${fleetId}`);
    return null;
  };
};
