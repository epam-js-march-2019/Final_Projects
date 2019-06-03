import List from './List';
import { connect } from 'react-redux';
import { fetchEquipment, showMore } from '../../../actions/equipment';

const mapStateToProps = (state, props) => {
  return {
    equipment: state.equipment.list,
    visible: state.equipment.visible || props.show 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEquipment: (visible) => dispatch(fetchEquipment(visible)),
    showMore: () => dispatch(showMore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)