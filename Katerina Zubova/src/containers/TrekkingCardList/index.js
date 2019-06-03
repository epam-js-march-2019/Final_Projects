import { connect } from "react-redux";

import TrekkingArticle from "../../components/TrekkingCardList/index.js";


function mapStateToProps (state) {
    return {
        cards: state.cardList.items
    }
}

export default connect(mapStateToProps)(TrekkingArticle);