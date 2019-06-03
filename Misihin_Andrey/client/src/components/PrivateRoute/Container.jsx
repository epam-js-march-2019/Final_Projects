import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state, props) => {
  return {
    isLogedIn: state.user.isLogedIn,
    component: props.component
  }
}

export default connect(mapStateToProps, null)(PrivateRoute);