import {
  WILL_FETCH_FLEETS,
  DID_FETCH_FLEETS_FOR_USER,
  DID_NOT_FETCH_FLEETS
} from '../actions/actionTypes/fleetAT';

const initialState = {
  fleets: {},
  userFleets: {}
};

const fleets = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case WILL_FETCH_FLEETS:
      // no-op
      return state;
    case DID_FETCH_FLEETS_FOR_USER:
      const { userId, fleets } = payload;

      // array -> map conversion
      const newFleets = fleets.reduce((acc, f) => {
        acc[f.id] = f;
        return acc;
      }, {});

      return {
        ...state,
        userFleets: {
          ...state.userFleets,
          [userId]: fleets
        },
        fleets: {
          ...state.fleets,
          ...newFleets
        }
      };
    case DID_NOT_FETCH_FLEETS:
    default:
      return state;
  }
};

export default fleets;
