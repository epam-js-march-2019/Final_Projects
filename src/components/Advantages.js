import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5, 0),
  },
  title: {
    textTransform: 'uppercase',
  }, 
});

function Advantages(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
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
  );
}

Advantages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Advantages);