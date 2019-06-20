import React from 'react';
// import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Device from "../../proptypes/Device.pt";


// const useStyles = makeStyles({
//   card: {
//     minWidth: 150
//   }
// });

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
      <TableCell align="right">{status}</TableCell>
      <TableCell align="right">{progress}</TableCell>
    </>
	);
};

DeviceListItem.propTypes = {
  device: Device
};

export default DeviceListItem;
