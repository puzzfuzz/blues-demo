import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

import Device from "../../proptypes/Device.pt";
import DeviceListItem from "./DeviceListItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  progress: {
    width: '100%'
  }
}));


const DeviceList = ({
  devices,
  fleetFirmware
}) => {
  const classes = useStyles();

	return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Firmware</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="right">Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {devices && devices.length
            ? (devices.map((d) => {
                return (
                  <TableRow key={`d_${d.id}`}>
                    <DeviceListItem device={d} fleetFirmware={fleetFirmware}/>
                  </TableRow>
                );
              }))
            : (
              <TableRow>
                <TableCell colSpan={5}>
                  <LinearProgress className={classes.progress}/>
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </Paper>
	);
};

DeviceList.propTypes = {
  devices: PropTypes.arrayOf(Device),
  fleetFirmware: PropTypes.string
};

DeviceList.defaultProps = {
  devices: null,
  fleetFirmware: null
};

export default DeviceList;
