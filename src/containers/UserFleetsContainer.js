import { connect } from "react-redux";
import {
  fetchFleetsForUser,
  navigateToFleet
} from "../actions/fleetActions";
import {toNum} from "../api/mocks/mockUtils";

const mapStateToProps = (state, { userId }) => {
  const props = {
    user: null,
    fleets: null
  };

  if (userId && state.users.users) {
    props.user = state.users.users.find((u) => u.id === toNum(userId));
    props.fleets = state.fleets.userFleets[toNum(userId)];
  }

  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFleetsForUser: (fleetId) => { dispatch(fetchFleetsForUser(fleetId)); },
    navigateToFleet: (userId) => { dispatch(navigateToFleet(userId)); }
  }
};

export default function UserContainer(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
}
