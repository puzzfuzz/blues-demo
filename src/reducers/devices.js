import {
  WILL_FETCH_DEVICES,
  DID_FETCH_DEVICES_FOR_FLEET,
  DID_NOT_FETCH_DEVICES_FOR_FLEET
} from '../actions/actionTypes/deviceAT';

const initialState = {
  devices: {},
  fleetDevices: {}
};

const devices = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case WILL_FETCH_DEVICES:
      // no-op for now. would do loading treatments / cleanup here
      return state;
    case DID_FETCH_DEVICES_FOR_FLEET:
      const { fleetId, devices} = payload;

      // array -> map conversion
      const newDevices = devices.reduce((acc, f) => {
        acc[f.id] = f;
        return acc;
      }, {});

      return {
        ...state,
        fleetDevices: { // minor optimization, wouldn't store duplicate copies of the objects in a real app
          ...state.fleetDevices,
          [fleetId]: devices
        },
        devices: {
          ...state.devices,
          ...newDevices
        }
      };
    case DID_NOT_FETCH_DEVICES_FOR_FLEET:
      // no-op for now. would do error handling here
      return state;
    default:
      return state;
  }
};

export default devices;
