import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    padding: '2em'
  }
});

function UserLoginForm({ userDidLogin }) {
  const [values, setValues] = useState({
    name: '',
    password: ''
  });

  const classes = useStyles();

  const [submitting, setSubmitting] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitForm = () => {
    // TODO - auth
    setSubmitting(true);
    setTimeout(() => {
      userDidLogin(values.name, values.password);
    }, 200);
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h2">
        Login to Blues.io
      </Typography>
      <CardContent>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="userLogin-name"
              label="Name"
              value={values.name}
              onChange={handleChange('name')}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="userLogin-password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange('password')}
              margin="normal"
            />
          </div>
        </form>
      </CardContent>
      <CardActionArea>
        {submitting
          ? (<CircularProgress />)
          : (
            <Button size="small" onClick={submitForm}>
              Login
            </Button>
          )
        }
      </CardActionArea>
    </Card>
  );
}

UserLoginForm.propTypes = {
  userDidLogin: PropTypes.func.isRequired
};

export default UserLoginForm;
