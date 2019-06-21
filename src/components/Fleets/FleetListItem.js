import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import Fleet from "../../proptypes/Fleet.pt";

// const useStyles = makeStyles({
//   card: {
//     minWidth: 150
//   }
// });


const FleetListItem = ({ fleet, showFleet }) => {
  const {
    id,
    firmware,
    devices,
    owner,
    name
  } = fleet;

  // const classes = useStyles();

  const deviceCount = (devices && devices.length) || '';

  return (
    <TableRow>
      <TableCell>
        <IconButton onClick={() => showFleet(id)} aria-label="View Fleet">
          <VisibilityOutlinedIcon />
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">{id}</TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{firmware}</TableCell>
      <TableCell align="right">{deviceCount}</TableCell>
      <TableCell align="right">{owner}</TableCell>
    </TableRow>
	);
};

FleetListItem.propTypes = {
  fleet: Fleet.isRequired,
  showFleet: PropTypes.func.isRequired
};

export default FleetListItem;
