import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DeviceList from "../components/Devices/DeviceList";
import FleetContainer from "../containers/FleetContainer";
import Device from "../proptypes/Device.pt";
import Fleet from "../proptypes/Fleet.pt";

class FleetRC extends Component {
  static propTypes = {
    fetchDeviceForFleet: PropTypes.func.isRequired,
    fleetId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    devices: PropTypes.arrayOf(Device),
    fleet: Fleet
  };

  state = {
    devicesFetched: false,
    devices: null
  };

  componentDidMount() {
    if (this.props.fleetId) {
      this.fetchDevices();
    }
  }

  fetchDevices = async () => {
    const { fleetId, fetchDeviceForFleet } = this.props;
    const devices = await fetchDeviceForFleet(fleetId);
    this.setState({
      devicesFetched: true,
      devices
    });
  };

	render() {
    const { fleet, devices } = this.props;

	  const {
      devicesFetched,

    } = this.state;

    return (
			<div>
        {fleet &&(
          <div>Fleet: {fleet.id}</div>
        )}
        <div>Devices</div>
        <DeviceList devices={devices} devicesFetched={devicesFetched} />
      </div>
		)
	}
}


export default FleetContainer(FleetRC);
