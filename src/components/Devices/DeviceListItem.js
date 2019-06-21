import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import Device from "../../proptypes/Device.pt";
import DeviceItemStatus from "./DeviceItemStatus";
import DeviceUpdateProgress from "./DeviceUpdateProgress";
import DeviceFirmwareStatus from "./DeviceFirmwareStatus";

const DeviceListItem = ({ device, fleetFirmware }) => {

  const {
    id,
    firmware,
    status,
    progress,
    name,
  } = device;

  const firmwareMismatch = fleetFirmware === null
    ? false
    : (firmware !== fleetFirmware);

  return (
    <>
      <TableCell component="th" scope="row">{id}</TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">
        <DeviceFirmwareStatus firmware={firmware} firmwareMismatch={firmwareMismatch}/>
      </TableCell>
      <TableCell align="center">
        <DeviceItemStatus status={status}/>
      </TableCell>
      <TableCell align="right">
        <DeviceUpdateProgress progress={progress}/>
      </TableCell>
    </>
	);
};

DeviceListItem.propTypes = {
  device: Device.isRequired,
  fleetFirmware: PropTypes.string
};

DeviceListItem.defaultProps = {
  fleetFirmware: null
};


export default DeviceListItem;
