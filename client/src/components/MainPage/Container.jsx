import { connect } from 'react-redux';
import { clearVisibleEquipment } from '../../actions/equipment';
import { clearVisibleExamples } from '../../actions/examples';
import MainPage from './MainPage';

const mapDispatchToProps = (dispatch) => {
  return {
    clearEquipment: (count) => dispatch(clearVisibleEquipment(count)),
    clearExamples: (count) => dispatch(clearVisibleExamples(count)),
  }
}

export default connect(null, mapDispatchToProps)(MainPage)