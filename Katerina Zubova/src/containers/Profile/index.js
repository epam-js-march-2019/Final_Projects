import { connect } from "react-redux";

import * as actions from "../../store/App/Session/actions";
import Profile from "../../components/Profile/Profile";


function mapStateToProps (state) {
    return {
        user: state.session.user
    }
}

function mapDispatchToProps (dispatch) {
    return {
        logOut:() => dispatch (actions.logOut()),
    }
}

export default connect (mapStateToProps, mapDispatchToProps)
(Profile);