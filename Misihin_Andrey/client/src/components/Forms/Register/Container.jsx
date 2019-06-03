import { connect } from 'react-redux';
import Form from './Form';
import { register } from '../../../actions/users';

const mapStateToProps = (state) => {
  return {
    isFetching: state.user.isFetching,
    errorMessage: state.user.registerError
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    handleSubmit: (target) => dispatch(register(target))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(Form);