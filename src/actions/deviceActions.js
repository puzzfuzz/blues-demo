import {
  WILL_FETCH_DEVICES,
  DID_FETCH_DEVICES_FOR_FLEET,
  DID_NOT_FETCH_DEVICES_FOR_FLEET,
  DEVICE_UPDATED
} from './actionTypes/deviceAT';
import {getDevicesForFleet, getDeviceStatus} from "../api/BluesAPI";


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

function deviceUpdated(device) {
  return {
    type: DEVICE_UPDATED,
    payload: {
      device
    }
  }
}

/**
 * Will fetch the data for all devices associated with a specific Fleet.
 * @param fleetId {string|number} Id of the fleet to fetch devices for
 * @returns {Function} async thunk
 */
export const fetchDeviceForFleet = (fleetId) => {
  return async (dispatch) => {
    dispatch(willFetchDevicesForFleet(fleetId));
    try {
      const devices = await getDevicesForFleet(fleetId);
      dispatch(didFetchDevicesForFleet(fleetId, devices));
      // if any of the devices we've fetched aren't fully up to date, set up a poll to fetch their status
      devices.forEach((d) => {
        if (d.progress < 100) {
          dispatch(pollDeviceForUpdateStatus(d));
        }
      });
    } catch (e) {
      dispatch(didNotFetchDevicesForFleet(fleetId, e.message));
      console.error(e);
    }
  };
};

/**
 * Poll for any updates on fetched Devices that aren't 100% updated.
 * There's definitely a more efficient way to do this!
 * @param device {object|Device} a Device to poll for
 * @returns {Function}
*/
const pollDeviceForUpdateStatus = (device) => {
  // poll recursively until status is 100
  return async (dispatch) => {
    if (device.progress >= 100) { return; }

    setTimeout(async () => {
      const updatedDevice = await getDeviceStatus(device);
      dispatch(deviceUpdated(updatedDevice));
      dispatch(pollDeviceForUpdateStatus(updatedDevice));
    }, 500);
  }
};
