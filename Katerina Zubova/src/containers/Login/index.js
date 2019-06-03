import { connect } from "react-redux";

import * as actions from "../../store/App/Session/actions";
import Login from "../../components/LogIn";


function mapStateToProps (state) {
    return {
        isAuthorized: Boolean(state.session.user),
        errorMsg: state.session.errorMsg
    }
}

const mapDispatchToProps = dispatch => ({
    logIn: (email, password) => dispatch(actions.logIn(email, password)),
})

export default connect (mapStateToProps, mapDispatchToProps)
(Login);