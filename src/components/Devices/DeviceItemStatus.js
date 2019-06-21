import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

import {
  STATUS_ACTIVE,
  STATUS_INACTIVE,
  STATUS_UPDATING,
  STATUS_EXPIRED
} from "../../api/mocks/mockConstants";


export default class DeviceItemStatus extends PureComponent {
  static propTypes = {
    status: PropTypes.string.isRequired
  };

  render() {
    const { status } = this.props;

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
  }
}
