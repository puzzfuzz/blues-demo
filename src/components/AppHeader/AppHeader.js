import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "@reach/router";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  homeLink: {
    textDecoration: 'none',
    '&:focus': { textDecoration: 'none' },
    '&:hover': { textDecoration: 'none' },
    '&:visited': { textDecoration: 'none' },
    '&:link': { textDecoration: 'none' },
    '&:active': { textDecoration: 'none' },
    color: theme.primary
  }
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.homeLink}>Blues.io</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
