import React from 'react';
import { navigate } from "@reach/router";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import User from "../../proptypes/User.pt";

const useStyles = makeStyles({
  card: {
    minWidth: 150
  }
});

const navigateToFleetView = (userId) => {
  console.log(`navigating to ${userId}`);
};

const UserListItem = ({ user }) => {
  const { id, name } = user;

  const classes = useStyles();


  return (
    <Card className={classes.card} >
      <CardActionArea onClick={() => { navigateToFleetView(id); }}>
        <CardContent>
          <div>{id}</div>
          <div>{name}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

UserListItem.propTypes = {
  user: User.isRequired
};

export default UserListItem;
