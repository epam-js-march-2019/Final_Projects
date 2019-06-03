import actionType from '../constants/actionType';

function addService(service) {
    return {
        type: actionType.NEW_SERVICE,
        service: service
    }
}

function addServiceItem(serviceItem) {
    return {
        type: actionType.NEW_SERVICE_ITEM,
        serviceItem: serviceItem
    }
}

function serviceItemLoading(){
    return {
        type: actionType.SERVICE_ITEM_LOADING
    }
}

function addReserve(username, day, name){
    return {
        type: actionType.ADD_RESERVE,
        username: username,
        day: day,
        name: name
    }
}

function fetchReserve(reservation) {
    return {
        type: actionType.FIND_RESERVE,
        reservation: reservation
    }
}


export function fetchService() {
    return dispatch => {
        return fetch(`http://localhost:5000/services`)
            .then( response => response.json())
            .then( (data) => dispatch(addService(data.data))
            )
    }
}


export function fetchServiceItem(id) {
    return dispatch => {
        return fetch(`http://localhost:5000/services/${id}`)
            .then( response => response.json())
            .then( (data) => dispatch(addServiceItem(data.data))
            )
    }
}

export  function submitNewService(data) {
    return dispatch => {
        return fetch('http://localhost:5000/services/', {
            method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(data),
            mode: 'cors'})
            .catch( (e) => console.log(e));
    }
}

export function submitReservation(serviceItemID, username, data){
    let token = localStorage.getItem('token') || null;

    return dispatch => {
        return fetch(`http://localhost:5000/services/${serviceItemID}/reserve`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }else{

                    dispatch(addReserve(username, data.day))
                }
            })
            .catch( (e) => console.log(e) );
    }
}


export default function fetchReservation(){

    return dispatch => {
        return fetch(`http://localhost:5000/services/reserve`)
            .then( response => response.json())
            .then( (data) => {
                let newData = [];
                for (let i=0; i<data.data.length; i++) {
                    for(let j=0; j<data.data[i].reservation.length; j++)
                        newData.push(data.data[i].reservation[j])
                }
                dispatch(fetchReserve(newData));
            })
            .catch((e) => console.log(e));
    }
}