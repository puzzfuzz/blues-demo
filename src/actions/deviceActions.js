import {
  WILL_FETCH_DEVICES,
  DID_FETCH_DEVICES_FOR_FLEET,
  DID_NOT_FETCH_DEVICES_FOR_FLEET
} from './actionTypes/deviceAT';
import {getDevicesForFleet} from "../api/BluesAPI";


function willFetchDevicesForFleet(fleetId) {
  return {
    type: WILL_FETCH_DEVICES,
    payload: {
      fleetId
    }
  };
}

function didFetchDevicesForFleet(fleetId, devices) {
  return {
    type: DID_FETCH_DEVICES_FOR_FLEET,
    payload: {
      fleetId,
      devices
    }
  }
}

function didNotFetchDevicesForFleet(fleetId, error) {
  return {
    type: DID_NOT_FETCH_DEVICES_FOR_FLEET,
    payload: {
      error
    }
  }
}

export const fetchDeviceForFleet = ((fleetId) => {
  return async (dispatch) => {
    dispatch(willFetchDevicesForFleet(fleetId));
    try {
      const devices = await getDevicesForFleet(fleetId);
      dispatch(didFetchDevicesForFleet(fleetId, devices));
    } catch (e) {
      dispatch(didNotFetchDevicesForFleet(fleetId, e.message));
      console.error(e);
    }
  };
});

