import constants from '../constants/actionType';

let initialState = {
    service: [],
    serviceItem: {},
    serviceItemLoading: true,
    reservation: []
};

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);

    switch(action.type) {

        case constants.NEW_SERVICE:
            updated['service'] = action.service;
            return updated;

        case constants.NEW_SERVICE_ITEM:
            updated['serviceItem'] = action.serviceItem;
            updated['serviceItemLoading'] = false;
            return updated;

        case constants.SERVICE_ITEM_LOADING:
            updated['serviceItemLoading'] = true;
            return updated;

        case constants.ADD_RESERVE:
            let updatedReservation = Object.assign([], updated['serviceItem'].reservation);
            updatedReservation.push({"username": action.username, "day": action.day, "name": action.name});
            updated['serviceItem'].reservation = updatedReservation;
            return updated;

        case constants.FIND_RESERVE:
            updated['reservation'] = action.reservation;
            return updated;

        default:
            return state
    }
}

