import { connect } from 'react-redux';
import Item from './Item';
import { fetchEquipmentBySlug } from '../../../actions/equipment';
import { createOrder, clearMessage } from '../../../actions/orders';

const mapStateToProps = (state, { match }) => {
  return {
    match: match,
    item: state.equipment.item,
    isLogedIn: state.user.isLogedIn,
    message: state.orders.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (slug) => dispatch(fetchEquipmentBySlug(slug)),
    createOrder: () => dispatch(createOrder()),
    clearMessage: () => dispatch(clearMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)