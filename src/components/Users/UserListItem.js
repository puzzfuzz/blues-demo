import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import User from "../../proptypes/User.pt";

const useStyles = makeStyles({
  card: {
    minWidth: 150
  }
});

const UserListItem = ({
  user,
  showFleetsForUser
}) => {
  const { id, name } = user;

  const classes = useStyles();

  return (
    <Card className={classes.card} >
      <CardActionArea onClick={() => { showFleetsForUser(id); }}>
        <CardContent>
          <div>{id}</div>
          <div>{name}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

UserListItem.propTypes = {
  user: User.isRequired,
  showFleetsForUser: PropTypes.func.isRequired
};

export default UserListItem;
