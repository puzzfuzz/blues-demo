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
