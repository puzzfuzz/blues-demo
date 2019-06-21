import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FleetList from "../components/Fleets/FleetList";
import UserFleetsContainer from "../containers/UserFleetsContainer";
import User from "../proptypes/User.pt";
import Fleet from "../proptypes/Fleet.pt";

class UserFleetsRC extends Component {
	static propTypes = {
	  userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fetchFleetsForUser: PropTypes.func.isRequired,
    navigateToFleet: PropTypes.func.isRequired,
    user: User,
    fleets: PropTypes.arrayOf(Fleet)
  };

  state = {
    fleetsFetched: false,
  };

  componentDidMount() {
    if (this.props.userId) {
      this.fetchFleets();
    }
  }

  fetchFleets = async () => {
    const { userId, fetchFleetsForUser } = this.props;
    this.setState({
      fleetsFetched: true
    }, () => {
      fetchFleetsForUser(userId);
    });
  };

  navigateToFleet = (fleetId) => {
    this.props.navigateToFleet(fleetId);
  };


  render() {
    const { fleets, user } = this.props;
    const { fleetsFetched } = this.state;

    return (
      <div>
        {user && (
          <div>Fleets for {user.name}</div>
        )}
        <FleetList
          fleetsFetched={fleetsFetched}
          fleets={fleets}
          showFleet={this.navigateToFleet}
        />
      </div>
    );
  }
}

export default UserFleetsContainer(UserFleetsRC);
