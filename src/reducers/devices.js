import {
  WILL_FETCH_DEVICES,
  DID_FETCH_DEVICES_FOR_FLEET,
  DID_NOT_FETCH_DEVICES_FOR_FLEET, DEVICE_UPDATED
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
    case DEVICE_UPDATED:
      const { device } = payload;

      // TODO - refactor
      // Device instances are currently stored in both the `devices` map and the `fleetDevices` instances for simplicity at render time.
      // We need to find all instances of the device that was updated and update them all.
      // `fleetDevices` should just be a reference into the `devices` map.
      const fleets = Object.entries(state.fleetDevices)
        .reduce((acc, [i, deviceArr]) => {
          const nDs = deviceArr.map((d) => {
            let dOut = d;
            if (d.id === device.id) {
              dOut = {...device};
            }

            return dOut;
          });

          acc[i] = nDs;
          return acc;
        }, {});

      return {
        ...state,
        devices: {
          ...state.devices,
          [device.id]: device
        },
        fleetDevices: {
          ...state.fleetDevices,
          ...fleets
        }
      };
    default:
      return state;
  }
};

export default devices;
