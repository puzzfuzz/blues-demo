import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


function UserLoginForm({ userDidLogin }) {
  const [values, setValues] = useState({
    name: '',
    password: ''
  });

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
    <form noValidate autoComplete="off">
      <TextField
        id="userLogin-name"
        label="Name"
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="userLogin-password"
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"
      />
      {submitting
        ? (<CircularProgress />)
        : (
          <Button variant="contained" color="primary" onClick={submitForm}>
            Login
          </Button>
        )
      }
    </form>
  );
}

UserLoginForm.propTypes = {
  userDidLogin: PropTypes.func.isRequired
};

export default UserLoginForm;
