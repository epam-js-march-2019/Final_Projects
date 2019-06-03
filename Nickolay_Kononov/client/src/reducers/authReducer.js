import constants from '../constants/actionType';

const initialState = {
    loggedIn: !!localStorage.getItem('token'),
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    admin: false,
    error: '',
    user: {}
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);

    switch(action.type) {

        case constants.USER_REGISTERED:
            updated['loggedIn'] = true;
            updated['username'] = action.username;
            updated['admin'] = action.admin;

            return updated;

        case constants.USER_LOGGEDIN:
            updated['loggedIn'] = true;
            updated['username'] = action.username;
            updated['admin'] = action.admin;
            return updated;

        case constants.USER_LOGOUT:
            updated['loggedIn'] = false;
            updated['username'] = '';
            updated['admin'] = false;
            return updated;

        case constants.IS_ADMIN:
            updated['admin'] = action.admin;
            return updated;

        case constants.AUTH_ERROR:
            updated['error'] = action.error;
            return updated;

        case constants.FETCH_USER:
            updated['user'] = action.user;
            return updated;

        default:
            return state;
    }
}