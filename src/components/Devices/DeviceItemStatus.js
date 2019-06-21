import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

import {
  STATUS_ACTIVE,
  STATUS_INACTIVE,
  STATUS_UPDATING,
  STATUS_EXPIRED
} from "../../api/mocks/mockConstants";


const DeviceItemStatus = ({ status }) => {

  let color;

	switch (status) {
    case STATUS_ACTIVE:
      color = 'primary'; break;
    case STATUS_UPDATING:
      color = 'secondary'; break;
    case STATUS_EXPIRED:
    case STATUS_INACTIVE:
    default:
      color = 'default';
  }

  return (
    <Chip label={status} color={color} />
  )
};

DeviceItemStatus.propTypes = {
  status: PropTypes.string.isRequired
};

export default DeviceItemStatus;
