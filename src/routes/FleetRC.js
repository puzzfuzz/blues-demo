import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


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

	  const fleetFirmware = (fleet && fleet.firmware )|| null;

    return (
			<div>
        {fleet && (
          <div>
            <Typography variant={'h2'} gutterBottom>Fleet: {fleet.name}</Typography>
            <Typography variant={'subtitle1'} gutterBottom>
              <div>id: {fleet.id}</div>
              <div>firmware: {fleet.firmware}</div>
            </Typography>
          </div>
        )}
        <Typography variant={'h5'} gutterBottom>Devices</Typography>
        <DeviceList devices={devices} devicesFetched={devicesFetched} fleetFirmware={fleetFirmware} />
      </div>
		)
	}
}


export default FleetContainer(FleetRC);
