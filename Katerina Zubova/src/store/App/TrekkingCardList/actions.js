import * as ACTION_TYPES from "./actionTypes";


export const displayCards = (cards) => {
    return {
        type: ACTION_TYPES.DISPLAY_TREKKING_CARDS,
        cards: cards
    }
};
