import { connect } from "react-redux";

import * as actions from "../../store/App/TrekkingCardList/actions";
import SearchMenu from "../../components/SearchMenu/index.js";

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
    displayCards: (cards) => dispatch(actions.displayCards(cards))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(SearchMenu);