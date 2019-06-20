import React, {Component} from 'react';
import { navigate } from "@reach/router";

import UserLoginForm from "../components/Users/UserLoginForm";
import { getUsers } from "../api/BluesAPI";
import UserList from "../components/Users/UserList";

export default class UserLoginRC extends Component {
  state = {
    userLoggedIn: false,
    users: null
  };

  userDidLogin = async () => {
    const users = await getUsers();
    this.setState({
      userLoggedIn: true,
      users
    });
  };

  navigateToFleetsForUser = (userId) => {
    navigate(`fleets/${userId}`);
  };

	render() {
	  const {
	    userLoggedIn,
      users
	  } = this.state;

		if (!userLoggedIn) {
		  return (<UserLoginForm userDidLogin={this.userDidLogin}/>);
    } else {
      return (<UserList users={users} showFleetsForUser={this.navigateToFleetsForUser}/>);
    }
	}
}
