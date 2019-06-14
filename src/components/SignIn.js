import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, Button, Container, Grid, Typography, Link } from '@material-ui/core';
import { TextField, FormControlLabel, Checkbox  } from '@material-ui/core';
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
  avatar: {
    margin: theme.spacing(1),
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

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {    
      user: '',
      password: '',
      isLoggedIn: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
   
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value; 
    this.setState({ [input.name]: value });
  };
 
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { user, password} = this.state;
    var userLS = localStorage.getItem('user');
    var passwordLS = localStorage.getItem('password');
    if(user !== userLS || password !== passwordLS) {
        alert('Incorrect login or password. Please try again');
    } else {
        localStorage.setItem('isLoggedIn', true);
        this.setState({ isLoggedIn: true });
    }
  };
  
  render () {
  const { classes } = this.props;
  const isLoggedIn = this.state.isLoggedIn;

    if (isLoggedIn) {
        return (
          <Redirect to='/profile'/>
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
                Sign in
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
                  autoComplete="login"
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
                <FormControlLabel
                  control={<Checkbox name="rememberMe" value="remember" color="primary" checked={this.state.rememberMe} onChange={this.handleChange}/>}
                  label="Remember me"
                />
                <Button 
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link component={RouterLink} to="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>            
                </Grid>
              </form>
            </div>      
          </Container>
    );
    };
  };
};

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default 
  withStyles(styles) (SignInForm);