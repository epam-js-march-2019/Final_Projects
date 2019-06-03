import React from 'react';
import { connect } from 'react-redux';
import SpecsTable from './SpecsTable';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { match }) => {
  console.log(state.equipment.item)
  const path = match.path.split("/").slice(-1)
  if (path[0] === 'specs') {
    return {
      specs: state.equipment.item['main_specs']
    }
  } else {
    return {
      specs: state.equipment.item['all_specs']
    }
  }
} 

export default withRouter(connect(mapStateToProps, null)(SpecsTable))