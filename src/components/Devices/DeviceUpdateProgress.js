import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';
import CheckIcon from '@material-ui/icons/Check';

const DeviceUpdateProgress = ({ progress }) => {

  if (progress === 100) {
    return <CheckIcon />;
  }

	return (
		<div >
      <div>{progress}%</div>
      <LinearProgress variant="determinate"  value={progress} />
    </div>
	);
};

DeviceUpdateProgress.propTypes = {
  progress: PropTypes.number.isRequired
};

export default DeviceUpdateProgress;
