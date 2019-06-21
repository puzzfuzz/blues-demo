import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import Device from "../../proptypes/Device.pt";
import DeviceItemStatus from "./DeviceItemStatus";
import DeviceUpdateProgress from "./DeviceUpdateProgress";


const DeviceListItem = ({ device }) => {

  const {
    id,
    firmware,
    status,
    progress,
    name,
  } = device;

  // const classes = useStyles();

  return (
    <>
      <TableCell component="th" scope="row">{id}</TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{firmware}</TableCell>
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
  device: Device
};

export default DeviceListItem;
