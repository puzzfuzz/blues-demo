import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import Fleet from "../../proptypes/Fleet.pt";

const useStyles = makeStyles({
  card: {
    minWidth: 150
  }
});

const FleetListItem = ({ fleet, showFleet }) => {
  const {
    id,
    firmware,
    devices,
    owner,
    name
  } = fleet;

  const classes = useStyles();

  const deviceCount = (devices && devices.length) || '';

	return (
    <Card className={classes.card} >
      <CardActionArea onClick={() => showFleet(id)}>
        <CardContent>
          <div>Id: {id}</div>
          <div>Firmware: {firmware}</div>
          <div>Devices: {deviceCount}</div>
        </CardContent>
      </CardActionArea>
    </Card>
	);
};

FleetListItem.propTypes = {
  fleet: Fleet.isRequired,
  showFleet: PropTypes.func.isRequired
};

export default FleetListItem;
