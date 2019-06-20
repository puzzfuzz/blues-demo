import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { navigate } from "@reach/router";

import { getFleetForUser } from "../api/BluesAPI";
import FleetList from "../components/Fleets/FleetList";

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

  navigateToFleet = (fleetId) => {
    navigate(`/fleet/${fleetId}`);
  };


  render() {
    const {
      fleetsFetched,
      fleets
    } = this.state;

    return (
      <div>
        <div>Fleets</div>
        <FleetList
          fleetsFetched={fleetsFetched}
          fleets={fleets}
          showFleet={this.navigateToFleet}
        />
      </div>
    );
  }
}
