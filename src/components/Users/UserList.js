import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

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
        <Grid container justify="center" spacing={4}>
          {users.map((u, i) => {
            return (
              <Grid item key={`u_${i}`}>
                <UserListItem user={u} />
              </Grid>
            );
          })}
        </Grid>
      )
    } else {
	    return (
        <CircularProgress />
      );
    }
	}
}
