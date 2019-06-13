import { getDefaultState } from "./defaultState";
import * as ACTION_TYPES from "./actionTypes";


export const cardList = (state=getDefaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.DISPLAY_TREKKING_CARDS:
            return {
                ...state,
                items: action.cards
            }
        default:
            return state
    }
}