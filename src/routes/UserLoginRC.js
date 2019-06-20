import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { navigate } from "@reach/router";

import UserLoginForm from "../components/Users/UserLoginForm";
import UserList from "../components/Users/UserList";
import UserContainer from "../containers/UserContainer";
import User from "../proptypes/User.pt";


@UserContainer
class UserLoginRC extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(User)
  };

  state = {
    userLoggedIn: false,
  };

  userDidLogin = async () => {
    this.setState({
      userLoggedIn: true
    }, this.props.fetchUsers);
  };

  navigateToFleetsForUser = (userId) => {
    navigate(`/fleets/${userId}`);
  };

	render() {
	  const {
      users
    } = this.props;

	  const {
	    userLoggedIn
	  } = this.state;

		if (!userLoggedIn) {
		  return (<UserLoginForm userDidLogin={this.userDidLogin}/>);
    } else {
      return (<UserList users={users} showFleetsForUser={this.navigateToFleetsForUser}/>);
    }
	}
}

export default UserLoginRC;
