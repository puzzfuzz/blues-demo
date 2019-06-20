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
      // no-op for now. would do loading treatments / cleanup here
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
        userFleets: { // minor optimization, wouldn't store duplicate copies of the objects in a real app
          ...state.userFleets,
          [userId]: fleets
        },
        fleets: {
          ...state.fleets,
          ...newFleets
        }
      };
    case DID_NOT_FETCH_FLEETS:
      // no-op for now. would do error handling here
      return state;
    default:
      return state;
  }
};

export default fleets;
