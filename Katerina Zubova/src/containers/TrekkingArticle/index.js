import { connect } from "react-redux";

import * as actions from "../../store/App/Session/actions";

import TrekkingArticle from "../../components/TrekkingArticle/index.js";

const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        isAuth: Boolean(state.session.user) /*селекторы*/
    };
};

const mapDispatchToProps = dispatch => ({
    signUp: (trekkingId) => dispatch(actions.signUp(trekkingId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(TrekkingArticle);