import { connect } from "react-redux";

import * as actions from "../../store/App/TrekkingCardList/actions";
import SearchMenu from "../../components/SearchMenu/index.js";


const mapDispatchToProps = dispatch => ({
    displayCards: (cards) => dispatch(actions.displayCards(cards))
});

export default connect( null, mapDispatchToProps)(SearchMenu);