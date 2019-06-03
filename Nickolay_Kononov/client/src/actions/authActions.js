import actionTypes from '../constants/actionType';

export function userLoggedIn(username, admin){
    return {
        type: actionTypes.USER_LOGGEDIN,
        username: username,
        admin: admin,
    }
}

function userRegistered(username, admin){
    return {
        type: actionTypes.USER_REGISTERED,
        username: username,
        admin:  admin
    }
}

function logout(){
    return {
        type: actionTypes.USER_LOGOUT
    }
}


function isAdmin(admin) {
    return {
        type: actionTypes.IS_ADMIN,
        admin: admin
    }

}

function authError(error) {
    return{
        type: actionTypes.AUTH_ERROR,
        error: error
    }
}

function fetchUser(user) {
    return{
        type: actionTypes.FETCH_USER,
        user: user
    }
}

export function submitLogin(data){
    return dispatch => {
        return fetch(`http://localhost:5000/user/${data.username}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (data) => {
                localStorage.setItem('username', data.data.username);
                localStorage.setItem('token', data.data.tokenID);

                dispatch(userLoggedIn(data.data.username, data.data.admin));
            })
            .catch( (e) => dispatch(authError(e)) );
    }
}

export function submitRegister(data){
    return dispatch => {
        return fetch('http://localhost:5000/user/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (data) => {

                localStorage.setItem('username', data.data.username);
                localStorage.setItem('token', data.data.tokenID);

                dispatch(userLoggedIn(data.data.username, data.data.admin));
            })
            .catch( (e) => dispatch(authError(e)) );
    }
}


export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        dispatch(logout());
    }
}

export function userAdmin(username) {
    return dispatch => {
        if (username) {
            fetch(`http://localhost:5000/user/admin/${username}`)
                .then(response => response.json())
                .then((data) => dispatch(isAdmin(data.data)))
                .catch((e) => console.log(e));
        }else{
            dispatch(isAdmin(false));
        }
    }
}



export function fetchUserAction(username) {
    return dispatch => {
        return fetch(`http://localhost:5000/user/${username}`)
            .then( response => response.json())
            .then( (data) => dispatch(fetchUser(data.data))
            )
    }
}