import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));

function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" background-сolor="theme.palette.primary.main" сolor="theme.palette.common.white">     
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          centered
          variant="fullWidth"
        >
          <Tab label="Home" component={RouterLink} to="/"/>
          <Tab label="Our Services" component={RouterLink} to="/services"/>
          <Tab label="Profile" component={RouterLink} to="/profile"/>         
        </Tabs>
      </AppBar>
    </div>
  );
}

export default ScrollableTabsButtonAuto;