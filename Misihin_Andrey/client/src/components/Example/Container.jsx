import List from './List/List';
import { connect } from 'react-redux';
import { fetchExamples, showMore } from '../../actions/examples';

const mapStateToProps = (state, props) => {
  return {
    examples: state.examples.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExamples: (visible) => dispatch(fetchExamples(visible)),
    showMore: () => dispatch(showMore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)