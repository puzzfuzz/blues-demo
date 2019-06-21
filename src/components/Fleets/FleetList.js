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

import Fleet from "../../proptypes/Fleet.pt";
import FleetListItem from './FleetListItem';


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


const FleetList = ({
  showFleet,
  fleets
}) => {

  const classes = useStyles();

	return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Firmware</TableCell>
            <TableCell align="right">Devices</TableCell>
            <TableCell align="right">Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fleets && fleets.length
            ? (fleets.map((f) => {
              return (
                <FleetListItem key={`f_${f.id}`} fleet={f} showFleet={showFleet} />
              );
            }))
            : (<LinearProgress className={classes.progress}/>)
          }
        </TableBody>
      </Table>
    </Paper>
	);
};

FleetList.propTypes = {
  fleetsFetched: PropTypes.bool.isRequired,
  showFleet: PropTypes.func.isRequired,
  fleets: PropTypes.arrayOf(Fleet)
};

export default FleetList;
