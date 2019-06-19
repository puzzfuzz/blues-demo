import { apiMock } from "./mocks/mockUtils";


import fleetMocks from './mocks/fleetMocks';


export const getFleetForUser = async (userId) => {
  return await apiMock(() => {
    return fleetMocks.filter((f) => f.owner === userId);
  });
};
