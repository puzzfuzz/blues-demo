import { LAST_FIRMWARE, CURRENT_FIRMWARE } from "./mockConstants";

const FLEET_1 = {
  id: 1,
  name: 'foo',
  firmware: CURRENT_FIRMWARE,
  devices: [1,2,3,20],
  owner: 1
};
const FLEET_2 =  {
  id: 2,
  name: 'bar',
  firmware: CURRENT_FIRMWARE,
  devices: [4,5,6],
  owner: 1
};
const FLEET_3 = {
  id: 3,
  name: 'baz',
  firmware: CURRENT_FIRMWARE,
  devices: [7,8,9],
  owner: 1
};
const FLEET_4 = {
  id: 4,
  name: 'a1',
  firmware: LAST_FIRMWARE,
  devices: [10,11,12],
  owner: 2
};
const FLEET_5 = {
  id: 5,
  name: 'b2',
  firmware: LAST_FIRMWARE,
  devices: [13,14,15],
  owner: 2
};
const FLEET_6 = {
  id: 6,
  name: 'c3',
  firmware: LAST_FIRMWARE,
  devices: [16,17,18],
  owner: 2
};


const fleets = [
  FLEET_1,
  FLEET_2,
  FLEET_3,
  FLEET_4,
  FLEET_5,
  FLEET_6,
];

export default fleets;
