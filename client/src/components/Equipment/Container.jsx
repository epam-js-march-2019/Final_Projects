import List from './List/List';
import { connect } from 'react-redux';
import { fetchEquipment, showMore } from '../../actions/equipment';

const mapStateToProps = (state) => {
  return {
    equipment: state.equipment.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEquipment: (visible) => dispatch(fetchEquipment(visible)),
    showMore: () => dispatch(showMore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)