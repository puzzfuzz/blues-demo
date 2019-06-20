import { connect } from "react-redux";
import {
  fetchUsers,
  navigateToFleetsForUser
} from "../actions/userActions";

const mapStateToProps = state => {
  return {
    ...state.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => { dispatch(fetchUsers); },
    navigateToFleetsForUser: (userId) => { dispatch(navigateToFleetsForUser(userId)); }
  }
};

export default function UserContainer(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
}
