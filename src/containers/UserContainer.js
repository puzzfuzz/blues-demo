import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions";

const mapStateToProps = ({ users }) => {
  return {
    users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => { dispatch(fetchUsers); }
  }
};

export default function UserContainer(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
}
