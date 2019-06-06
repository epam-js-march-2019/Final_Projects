import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';

const backgroundImage =
  'https://nicciosalon.com/wp-content/uploads/2015/09/header-6.jpg';

const styles = theme => ({
    root: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.light,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center-bottom',
        textTransform: 'uppercase',
           
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
          height: '80vh',
          minHeight: 1100,
          maxHeight: 1600,
        },        
      },
    container: {       
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: theme.typography.fontWeightMedium,      
      },    
    button: {
        minWidth: 200,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
        marginTop: theme.spacing(10),
      },
    h1: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        },
        
    },  
});

function Showcase(props) {
  const { classes } = props;

  return (    
      <section className={classes.root}>
      <Container className={classes.container}>
      <Typography color="inherit" align="center" variant="h1" marked="center">
        Creating trends
      </Typography>   
      <Button component={RouterLink} to="/profile"     
        variant="contained"
        size="large"
        className={classes.button}
        href="/"
      >
        Book an appointment
      </Button>      
      </Container>
    </section>
   
  );
}

Showcase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Showcase);