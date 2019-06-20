import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { getFleetForUser } from "../api/BluesAPI";
import FleetListController from "../components/Fleets/FleetListController";

export default class UserFleetsRC extends Component {
	static propTypes = {
	  userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  state = {
    fleetsFetched: false,
    fleets: null
  };

  componentDidMount() {
    if (this.props.userId) {
      this.fetchFleets();
    }
  }



  fetchFleets = async () => {
    const { userId } = this.props;
    const fleets = await getFleetForUser(userId);
    this.setState({
      fleetsFetched: true,
      fleets
    });
  };

  render() {
    const {
      fleetsFetched,
      fleets
    } = this.state;

    return (
      <div>
        <div>Fleets</div>
        <FleetListController
          fleetsFetched={fleetsFetched}
          fleets={fleets}
        />
      </div>
    );
  }
}
