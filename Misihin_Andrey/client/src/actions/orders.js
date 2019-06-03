export const fetchOrders = () => async (dispatch, getState) => {

  const { jwt } = getState().user;

  dispatch({
    type: 'FETCH_ORDERS_START',
    isFetching: true
  })

  try {
    const data = await fetch('http://localhost:3002/api/orders',
    {
      headers: { 'Authorization': jwt }
    });

    const list = await data.json();

    dispatch({
      type: 'FETCH_ORDERS_SUCCESS',
      isFetching: false,
      list
    })
  } catch(e) {
    dispatch({
      type: 'FETCH_ORDERS_ERROR',
      isFetching: false,
      error: e
    })
  }

}



export const createOrder = () => async (dispatch, getState) => {

  const jwt = getState().user.jwt;
  const equipment = getState().equipment.item._id;
  console.log(equipment)

  dispatch({
    type: 'CREATE_ORDER_START',
    isFetching: true
  })

  try {
    const response = await fetch('http://localhost:3002/api/orders',
    {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': jwt 
      },
      body: JSON.stringify({
        equipment
      })
    });

    await response.json();

    if (response.status === 201) {
      dispatch({
        type: 'CREATE_ORDER_SUCCESS',
        isFetching: false,
        message: 'Вы записаны'
      })
    } else {
      dispatch({
        type: 'CREATE_ORDER_ERROR',
        isFetching: false,
        message: 'Пожалуйста, зарегистрируйтесь'
      })
    }
    
  } catch(e) {
    dispatch({
      type: 'CREATE_ORDER_ERROR',
      isFetching: false,
      error: e
    })
  }

}



export const deleteOrder = (event) => async (dispatch, getState) => {

  const jwt = getState().user.jwt;

  event.preventDefault();

  const id = event.target.parentElement.parentElement.getAttribute("param-id");

  dispatch({
    type: 'DELETE_ORDER_START',
    isFetching: true
  })

  try {
    const response = await fetch('http://localhost:3002/api/orders',
    {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': jwt 
      },
      body: JSON.stringify({ id })
    });

    const data = await response.json();

    if (response.status === 202) {
      dispatch({
        type: 'DELETE_ORDER_SUCCESS',
        isFetching: false,
        message: data.message
      })

      dispatch(fetchOrders());
    } else {
      dispatch({
        type: 'DELETE_ORDER_ERROR',
        isFetching: false,
        message: data.message
      })
    }
    
  } catch(e) {
    dispatch({
      type: 'DELETE_ORDER_ERROR',
      isFetching: false,
      message: e
    })
  }

}



export const clearOrders = () => {
  return {
    type: 'ORDERS_CLEAR'
  }
}



export const clearMessage = () => {
  return {
    type: 'ORDERS_MESSAGE_CLEAR',
  }
}