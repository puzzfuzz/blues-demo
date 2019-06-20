import { connect } from "react-redux";

import { fetchDeviceForFleet } from "../actions/deviceActions";
import { toNum } from "../api/mocks/mockUtils";

const mapStateToProps = ({ fleets, devices }, { fleetId }) => {
  const props = {
    fleet: null,
    devices: null
  };

  if (fleetId && fleets.fleets) {
    props.fleet = fleets.fleets[toNum(fleetId)];
    props.devices = devices.fleetDevices[toNum(fleetId)];
  }

  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDeviceForFleet: (fleetId) => { dispatch(fetchDeviceForFleet(fleetId)); },
  }
};

export default function FleetContainer(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
}
