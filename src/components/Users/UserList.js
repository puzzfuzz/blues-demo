import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import User from "../../proptypes/User.pt";
import UserListItem from "./UserListItem";

const UserList = ({
  users = null,
  showFleetsForUser
}) => {

  if (users) {
    return (
      <Grid container justify="center" spacing={4}>
        {users.map((u, i) => {
          return (
            <Grid item key={`u_${i}`}>
              <UserListItem user={u} showFleetsForUser={showFleetsForUser} />
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
};

UserList.propTypes = {
  showFleetsForUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(User)
};

UserList.defaultProps = {
  users: null
};

export default UserList;
