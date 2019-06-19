import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import User from "../../proptypes/User.pt";
import UserListItem from "./UserListItem";

export default class UserList extends Component {
	static propTypes = {
	  users: PropTypes.arrayOf(User)
  };

	static defaultProps = {
	  users: null
  };

	render() {
	  const { users } = this.props;

	  if (users) {
	    return (
	      <div>
          {users.map((u, i) => <UserListItem key={`u_${i}`} user={u} />)}
        </div>
      )
    } else {
	    return (
        <CircularProgress />
      );
    }
	}
}
