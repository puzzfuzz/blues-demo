import React from 'react';
import PropTypes from 'prop-types';
import Device from "../../proptypes/Device.pt";
import DeviceListItem from "./DeviceListItem";


const DeviceList = ({
  devicesFetched,
  devices
}) => {

	return (
		<div>
      {devicesFetched
        ? (devices.map((d) => <DeviceListItem key={`d_${d.id}`} device={d} />))
        : (<div>Loading...</div>)
      }
    </div>
	);
};

DeviceList.propTypes = {
  devicesFetched: PropTypes.bool.isRequired,
  devices: PropTypes.arrayOf(Device)
};

export default DeviceList;
