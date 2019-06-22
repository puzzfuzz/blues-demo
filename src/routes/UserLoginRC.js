import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from "../proptypes/User.pt";
import UserLoginForm from "../components/Users/UserLoginForm";
import UserList from "../components/Users/UserList";
import UserContainer from "../containers/UserContainer";




class UserLoginRC extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    navigateToFleetsForUser: PropTypes.func.isRequired,
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


	render() {
	  const {
      users,
      navigateToFleetsForUser
    } = this.props;

	  const {
	    userLoggedIn
	  } = this.state;

		if (!userLoggedIn) {
		  return (<UserLoginForm userDidLogin={this.userDidLogin}/>);
    } else {
      return (<UserList users={users} showFleetsForUser={navigateToFleetsForUser}/>);
    }
	}
}

/**
 * TODO -
 * The cleaner way to do this is with Decorators, but they're currently an experimental ES feature and not supported in
 * the `create-react-app` framework being using. Using decorators allows for really clean composition of Containers to
 * separate out the redux / app state logic from the view and rendering tier.
 *
 * Example syntax:
 *
 * @UserContainer
 * class UserLoginRC extends Component {...}
 */

export default UserContainer(UserLoginRC);
