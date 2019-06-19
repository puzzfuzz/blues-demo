import { noticeError } from "../util/reportingUtils";

import { apiMock } from "./mocks/mockUtils";

import userMocks from './mocks/userMocks';
import fleetMocks from './mocks/fleetMocks';
import deviceMocks from './mocks/deviceMocks';

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
  // TODO - this would be baked into a cookie, JWT, x-api header, or some other more robust authentication
  const url = `/${userId}/fleets`;
  if (!userId) {
    noticeError(`BluesAPI:getFleetForUser - fetch failed for url: ${url} . userId is required`);
  }

  return await apiMock(url, () => {
    return fleetMocks.filter((f) => f.owner === userId);
  });
};

/**
 * Get the list of devices for a given fleet.
 * @param fleetId {number} id of the fleet to fetch devices for
 * @returns {Promise<*>} list of Devices for the given fleet
 */
export const getDevicesForFleet = async (fleetId) => {
  const url = `/${fleetId}/devices`;
  if (!fleetId) {
    noticeError(`BluesAPI:getFleetForUser - fetch failed for url: ${url} . fleetId is required`);
  }

  return await apiMock(url, () => {
    const fleet = fleetMocks.find((f) => f.id === fleetId);
    return fleet.devices.reduce((acc, dId) => {
      const device = deviceMocks[dId];
      if (device) {
        acc.push(device);
      }

      return acc;
    }, []);
  })
};


const bluesAPI = {
  getUsers,
  getFleetForUser,
  getDevicesForFleet
};

export default bluesAPI;

