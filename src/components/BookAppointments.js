import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import {Container, Paper, List, ListItem, ListItemText, Grid, Typography, Avatar, Button} from '@material-ui/core';
import {Select, InputLabel, MenuItem, FormControl, FormHelperText} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


const styles = theme => ({
  root: {
    minHeight: '100vh',    
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    textTransform: 'uppercase',
    color: theme.palette.common.white,
  },
  image: {
    backgroundImage: 'url(https://nicciosalon.com/wp-content/uploads/2015/09/header-7.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  list: {
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    marginBottom: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  clearlist: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
});

class BookAppointments extends Component {
    state = {
      appointments: {
        treatment: '',
        date: '',
        time: ''
      },
      selectedTreatment: '',
      selectedDate: new Date(),
      selectedTime: '',
      notValidated: false
    }

    getAppointmentsFromLS = () =>{
      let appointments = localStorage.getItem('appointmentList');
      if (appointments){
        appointments = JSON.parse(appointments);
        this.setState({appointments: appointments});
      } else {
        this.setState({appointments: []});
      }
    };

    componentDidMount() {
      this.getAppointmentsFromLS()
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState ({
      ...this.state, [name]:value
     })
    };
  
    handleDateChange = (date) => {
      this.setState({
        selectedDate: date
      })
    };
  
    handleFormSubmit = (e) => {
      e.preventDefault()
      this.setState({ notValidated: false });

    if (!this.state.selectedTreatment) {
      console.log ("not validated")
      this.setState({ notValidated: true });
    } else {
      let yyyy = this.state.selectedDate.getFullYear();
      let mm = this.state.selectedDate.getMonth()+1;
      if (mm < 10) mm = '0' + mm;
      let dd = this.state.selectedDate.getDate();
      if (dd < 10) dd = '0' + dd;

      let hrs = this.state.selectedTime ? ` at ${this.state.selectedTime}`: ", time to be agreed";

      const newAppointment = { 
        treatment: this.state.selectedTreatment,
        date: `${dd}.${mm}.${yyyy}`,
        time: hrs,
      } 
      let appointmentList = JSON.parse(localStorage.getItem('appointmentList')) || [] ;
      appointmentList.push(newAppointment);
      localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
      this.getAppointmentsFromLS();
    }
    };

    clearList = (e) => {
      localStorage.removeItem('appointmentList');
      this.getAppointmentsFromLS();
    }

    render () {
      const { classes } = this.props;
      const { notValidated } = this.state;
      return (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image}>
            <Container className={classes.container}>
              <Typography variant="h4" marked="center" align="center" component="h2">
                Your Appointments
              </Typography>
            </Container>            
            <Container >
              <Grid container>
                <Grid item xs sm>
                  <Paper className={classes.list}>
                    {Object.entries(this.state.appointments).map(appointment => (
                      <List component="ul">
                        <ListItem
                        key={`${appointment[0]}`}
                        >
                        <ListItemText 
                        primary={`${appointment[1].treatment}`}
                        secondary={`${appointment[1].date}${appointment[1].time}`}/>
                        </ListItem>
                      </List>
                    ))}
                  </Paper>
                  </Grid>                
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Grid item xs sm className={classes.clearlist}>
                <Button 
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={ this.clearList }>
                  Clear List
                </Button>
              </Grid>
              <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <AssignmentIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Book an Appointment
                  </Typography>
                  <form className={classes.form} noValidate onSubmit={ this.handleFormSubmit }>
                    <FormControl className={classes.formControl} error={notValidated}>
                      <InputLabel htmlFor="treatment">What service would you like to book?</InputLabel>
                      <Select
                          value={this.state.selectedTreatment}
                          onChange={this.handleChange('selectedTreatment')}
                          inputProps={{
                            name: 'selectedTreatment'
                          }}>
                          <MenuItem value={'Haircut'}> Haircut </MenuItem>
                          <MenuItem value={'Color'}> Color </MenuItem>
                          <MenuItem value={'Ombre'}> Ombre </MenuItem>
                          <MenuItem value={'Highlighting'}> Highlighting </MenuItem>
                          <MenuItem value={'Curling'}> Curling </MenuItem>
                          <MenuItem value={'Casual Hair Dressing'}> Casual Hair Dressing</MenuItem>
                          <MenuItem value={'Special Occasion Hair Dressing'}> Special Occasion Hair Dressing</MenuItem>
                          <MenuItem value={'Bridal Hair Dressing'}> Bridal Hair Dressing</MenuItem>
                      </Select>
                      {notValidated && <FormHelperText>Please select a service</FormHelperText>}
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        variant="inline"
                        label="What day would you prefer?"
                        format="dd.MM.yyyy"
                        minDate= {new Date()}
                        value={this.state.selectedDate}
                        name="date"
                        InputAdornmentProps={{ position: "start" }}
                        onChange={this.handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="time">Any preferred time?</InputLabel>
                      <Select
                          value={this.state.selectedTime}
                          onChange={this.handleChange('selectedTime')}
                          inputProps={{
                            name: 'selectedTime'
                          }}>
                        <MenuItem value={'10.00'}> 10.00 </MenuItem>
                        <MenuItem value={'11.00'}> 11.00 </MenuItem>
                        <MenuItem value={'12.00'}> 12.00 </MenuItem>
                        <MenuItem value={'13.00'}> 13.00 </MenuItem>
                        <MenuItem value={'14.00'}> 14.00 </MenuItem>
                        <MenuItem value={'15.00'}> 15.00</MenuItem>
                        <MenuItem value={'16.00'}> 16.00</MenuItem>
                        <MenuItem value={'17.00'}> 17.00</MenuItem>
                        <MenuItem value={'18.00'}> 18.00</MenuItem>
                        <MenuItem value={'19.00'}> 19.00</MenuItem>
                        <MenuItem value={'20.00'}> 20.00</MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}>
                      Book me in!
                    </Button>
                  </form>
              </div>      
            </Container>
          </Grid>
        </Grid>
      );
    };
};

BookAppointments.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default 
    withStyles(styles) (BookAppointments);