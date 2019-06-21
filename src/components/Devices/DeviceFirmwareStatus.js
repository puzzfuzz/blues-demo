import React from 'react';
import PropTypes from 'prop-types';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  statusWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  statusNum: {
    marginRight: '1em'
  }
});

const DeviceFirmwareStatus = ({ firmware, firmwareMismatch }) => {

  const classes = useStyles();

  return (
		<div className={classes.statusWrapper}>
      <span className={classes.statusNum}>{firmware}</span>
      {firmwareMismatch && (
        <WarningIcon color="error" />
      )}
    </div>
	);
};

DeviceFirmwareStatus.propTypes = {
  firmware: PropTypes.string.isRequired,
  firmwareMismatch: PropTypes.bool.isRequired
};

export default DeviceFirmwareStatus;
