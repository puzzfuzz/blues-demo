import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import WarningIcon from '@material-ui/icons/Warning';

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
        <Tooltip title="Firmware Mismatch" aria-label="Firmware Mismatch">
          <WarningIcon color="error" />
        </Tooltip>
      )}
    </div>
	);
};

DeviceFirmwareStatus.propTypes = {
  firmware: PropTypes.string.isRequired,
  firmwareMismatch: PropTypes.bool.isRequired
};

export default DeviceFirmwareStatus;
