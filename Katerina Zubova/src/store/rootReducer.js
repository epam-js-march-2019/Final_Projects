import { combineReducers } from "redux";

import { cardList } from "./App/TrekkingCardList/reducer";
import { session } from "./App/Session/reducer";

export default combineReducers({
    cardList,
    session
});