import React from 'react';
// import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Device from "../../proptypes/Device.pt";


const useStyles = makeStyles({
  card: {
    minWidth: 150
  }
});

const DeviceListItem = ({ device }) => {

  const {
    id,
    firmware,
    status,
    progress,
    name,
  } = device;

  const classes = useStyles();

  return (
    <Card className={classes.card} >
      <CardContent>
        <div>{id}</div>
        <div>{name}</div>
        <div>{firmware}</div>
      </CardContent>
    </Card>
	);
};

DeviceListItem.propTypes = {
  device: Device
};

export default DeviceListItem;
