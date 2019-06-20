import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getDevicesForFleet} from "../api/BluesAPI";
import DeviceList from "../components/Devices/DeviceList";

export default class FleetRC extends Component {
  static propTypes = {
    fleetId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
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
    const { fleetId } = this.props;
    const devices = await getDevicesForFleet(fleetId);
    this.setState({
      devicesFetched: true,
      devices
    });
  };

	render() {
    const { fleetId } = this.props;

	  const {
      devicesFetched,
      devices
    } = this.state;

    console.log(devices);

    return (
			<div>
        <div>Fleet: {fleetId}</div>
        <div>Devices</div>
        <DeviceList devices={devices} devicesFetched={devicesFetched} />
      </div>
		)
	}
}
