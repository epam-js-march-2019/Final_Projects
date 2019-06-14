import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const backgroundImage =
  'https://nicciosalon.com/wp-content/uploads/2015/09/header-6.jpg';

const styles = theme => ({
    imageSection: {
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
    textSection: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
        [theme.breakpoints.up('sm')]: {
          height: '40vh',
          minHeight: 800,
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
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
    },
    title: {
      textTransform: 'uppercase',
    }, 
});

class LandingPage extends Component {
    
  render () {
    const { classes } = this.props;
    return (    
      <>
        <section className={classes.imageSection}>
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
        <section className={classes.textSection}>
          <Container className={classes.container}>      
            <Grid container spacing={5}>
              <Grid item xs>
                <div className={classes.item}>              
                  <Typography className={classes.title} variant="h4" marked="center" align="center" component="h2">
                    Luccio Hair Salon
                  </Typography>
                  </div>
                  <div className={classes.item}>
                  <Typography variant="h5" marked="center" align="center">
                    {'Located in the very heart of city, LUCCIO Hair Salon is the place to go for the ultimate hair and beauty treatment. '}
                  </Typography>            
                  <Typography variant="h5" marked="center" align="center">
                    {'Established in 2005 and constantly expanding our clientele, we offer a wide selection of specialized services '}
                    {'and treatments.'}
                  </Typography>
                  <Typography variant="h5" marked="center" align="center">
                    {'We hire only the most professional and skillful hair stylists.'}
                  </Typography>
                  <Typography variant="h5" marked="center" align="center">
                    {'Experience our comfortable atmosphere, where the most high end fashion trends are provided with '}
                    {'the highest level of customer service. '}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </>
    )
}};

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default 
  withStyles(styles) (LandingPage);