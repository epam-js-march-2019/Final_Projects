import List from './List';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    item: state.equipment["item"]
  }
}

export default connect(mapStateToProps, null)(List)