import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, Button, Container, Typography, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  notice: {
    marginBottom: theme.spacing(1),
  },
  avatar: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.accent.pink,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    '&:hover': {
      backgroundColor: theme.palette.accent.pink,
    },
  },
  link: {
    color: theme.palette.accent.pink
  }
});

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {    
      user: '',
      password: '',
      isRegistered: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;
    this.setState({ [input.name]: value });
  };
 
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { user, password } = this.state;
    localStorage.setItem('user', user);
    localStorage.setItem('password', password);
    this.setState({ isRegistered: true });
  };
  
  render () {
  const { classes } = this.props;
  const isRegistered = this.state.isRegistered;
  if (isRegistered) {
    return (
      <Redirect to='/sign-in'/>
    )
  } else {
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="Login"
            name="user"
            autoComplete="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>          
        </form>
      </div>      
    </Container>
    )
 };
};
};

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default 
  withStyles(styles) (SignUpForm);