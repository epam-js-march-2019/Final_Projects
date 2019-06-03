import { connect } from 'react-redux';
import Modal from './Modal';
import { closeModal } from '../../actions/modal';

const mapDispatchToState = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(null, mapDispatchToState)(Modal);