import * as ACTION_TYPES from "./actionTypes";

import store from "../../../store"

function checkCredentials (email, password) {
    const user = JSON.parse(localStorage.getItem(email));
    if (user)
        return (user.email===email && user.password===password);
    return false
}



export function logIn(email, password) {
    return dispatch =>
    {
        if (checkCredentials (email, password)) {

            const user = JSON.parse(localStorage.getItem(email));

            dispatch({
                type: ACTION_TYPES.LOG_IN,
                username: user.name,
                email: user.email,
                password: user.password,
                trekking: user.trekking
            })
        } else {
            dispatch({
                type: ACTION_TYPES.LOG_IN_FAILURE,
                errorMsg: 'Имя пользователя или пароль введены не верно'
            })
        }
    }
}

export function signUp (trekkingId) {

    const user = JSON.parse(localStorage.getItem( store.getState().session.user.email));
    user.trekking.push(trekkingId);

    const obj = JSON.stringify(user);
    localStorage.setItem(user.email, obj);


    return {
        type: ACTION_TYPES.SIGN_UP,
        trekking: trekkingId
    }
}


export const logOut = () => {

    return {
        type: ACTION_TYPES.LOG_OUT,
    }
}