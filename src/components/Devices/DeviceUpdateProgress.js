import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  progressWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  progressNumber: {
    marginRight: '1em'
  }
});

const DeviceUpdateProgress = ({ progress }) => {

  const classes = useStyles();

  if (progress === 100) {
    return <CheckIcon />;
  }

	return (
		<div className={classes.progressWrapper} >
      <span className={classes.progressNumber}>{progress}%</span>
      <CircularProgress variant="determinate" value={progress} />
    </div>
	);
};

DeviceUpdateProgress.propTypes = {
  progress: PropTypes.number.isRequired
};

export default DeviceUpdateProgress;
