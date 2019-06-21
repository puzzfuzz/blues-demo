import { noticeError } from "../util/reportingUtils";

import {apiMock, randomFromInterval, toNum} from "./mocks/mockUtils";

import userMocks from './mocks/userMocks';
import fleetMocks from './mocks/fleetMocks';
import deviceMocks from './mocks/deviceMocks';
import {STATUS_ACTIVE} from "./mocks/mockConstants";

/**
 * Mock API calls for various endpoints. Homegrown mock util simply adds random latency to call.
 * I've specifically ignored any authentication concerns here for brevity.
 */


/**
 * Fetch all users in the system.
 * @returns {Promise<*>} list of Users
 */
export const getUsers = async () => {
  const url = '/users';
  return await apiMock(url, () => {
    return userMocks;
  })
};

/**
 * Get the list of fleets for the given user id.
 * @param userId {number} id of the user to fetch
 * @returns {Promise<*>} list of Fleets matching the given user
 */
export const getFleetForUser = async (userId) => {
  let nUserId = userId;

  // userId can come in as a string from a URL param, so lets try to cast it to a num before using
  try {
    nUserId = toNum(userId);
  } catch (e) {
    noticeError('BluesAPI:getFleetForUser - userId must be numeric');
    throw e;
  }


  // TODO - this would be baked into a cookie, JWT, x-api header, or some other more robust authentication
  const url = `/${nUserId}/fleets`;
  if (!nUserId) {
    noticeError(`BluesAPI:getFleetForUser - fetch failed for url: ${url} . userId is required`);
  }

  return await apiMock(url, () => {
    return fleetMocks.filter((f) => f.owner === nUserId);
  });
};

/**
 * Get the list of devices for a given fleet.
 * @param fleetId {number} id of the fleet to fetch devices for
 * @returns {Promise<*>} list of Devices for the given fleet
 */
export const getDevicesForFleet = async (fleetId) => {
  let nFleetId = fleetId;

  // fleetId can come in as a string from a URL param, so lets try to cast it to a num before using
  try {
    nFleetId = toNum(fleetId);
  } catch (e) {
    noticeError('BluesAPI:getFleetForUser - userId must be numeric');
    throw e;
  }

  const url = `/${nFleetId}/devices`;
  if (!nFleetId) {
    noticeError(`BluesAPI:getFleetForUser - fetch failed for url: ${url} . fleetId is required`);
  }

  return await apiMock(url, () => {
    const fleet = fleetMocks.find((f) => f.id === nFleetId);
    return fleet.devices.reduce((acc, dId) => {
      const device = deviceMocks[dId];
      if (device) {
        acc.push(device);
      }

      return acc;
    }, []);
  })
};


/**
 * Fetch device status, specifically looking for upgrade progress updates.
 * Mock calculates a random new progress between current progress and 100, and will fastforward once progress hits >95
 * @param device
 * @returns {Promise<{progress: number}>}
 */
export const getDeviceStatus = async (device) => {
  const url = `/devices/${device.id}`;

  await apiMock(url);

  const { progress } = device;
  const newProgress = (progress >= 95)
    ? 100
    : randomFromInterval(device.progress, 100);

  let status = device.status;

  if (newProgress === 100) {
    status = STATUS_ACTIVE;
  }

  return {
    ...device,
    progress: newProgress,
    status
  }
};


const bluesAPI = {
  getUsers,
  getFleetForUser,
  getDevicesForFleet
};

export default bluesAPI;

