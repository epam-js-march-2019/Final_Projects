import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookAppointments from './BookAppointments';
import { Link as RouterLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography, Link } from '@material-ui/core';

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
    color: theme.palette.accent.pink,
  },
  link: {
    color: theme.palette.accent.pink
  }
});

class Profile extends Component {

    constructor(props) {
       super(props);
       this.state = {        
        isLoggedIn: false
       };      
    }

    componentDidMount() {
        this.checkAuth()
      };

    checkAuth = () =>{
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        this.setState({isLoggedIn: isLoggedIn});
      };
       
    render () {
        const { classes } = this.props;
        const isLoggedIn = this.state.isLoggedIn;
        let content;
        if (isLoggedIn) {
            content = <BookAppointments />
            } else {
            content = 
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <Typography className={classes.notice} component="h1" variant="h5">
                    <Link component={RouterLink} to="/sign-in" className={classes.link}>Please sign in first.</Link>
                  </Typography>
                </div>
            </Container>
              
            }
        return (
            <>
              {content}
            </>
        );
    };
  }
  
  Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default 
    withStyles(styles) (Profile);