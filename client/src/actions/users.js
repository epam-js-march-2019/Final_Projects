import { closeModal } from './modal';
import { clearOrders } from './orders';

export const register = (target) => async (dispatch, getState) => {

  target.preventDefault();

  dispatch({
    type: 'REGISTER_USER_START',
  });

  const user = { ...getState().form.register.values };

  try {

    const response = await fetch('http://localhost:3002/api/users/register',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();

    if (response.status === 201) {

      dispatch({
        type: 'REGISTER_USER_SUCCESS',
        email: data.user.email, 
        jwt: `Bearer ${data.token}`
      });

      dispatch(closeModal());

    } else {
      dispatch({
        type: 'REGISTER_USER_ERROR',
        error: data.message
      });

    }

  } catch(e) {
    dispatch({
      type: 'REGISTER_USER_ERROR',
      error: e
    });
    
  }

}


export const login = (target) => async (dispatch, getState) => {

  target.preventDefault();

  dispatch({
    type: 'LOGIN_USER_START',
  });

  const user = { ...getState().form.login.values };

  try {

    const response = await fetch('http://localhost:3002/api/users/login',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();

    if (response.status === 200) {

      dispatch({
        type: 'LOGIN_USER_SUCCESS',
        email: user.email, 
        jwt: `Bearer ${data.token}`
      });

      dispatch(closeModal());

    } else {
      dispatch({
        type: 'LOGIN_USER_ERROR',
        error: data.message
      });

    }

  } catch(e) {
    dispatch({
      type: 'LOGIN_USER_ERROR',
      error: e
    });
    
  }  
}


export const logout = (target) => (dispatch) => {

  target.preventDefault();

  dispatch({
    type: 'USER_LOGOUT',
  })

  dispatch(clearOrders());

}



export const jwt_check = () => async (dispatch, getState) => {

  const jwt = getState().user.jwt;

  if (!jwt) {
    dispatch({
      type: 'JWT_USER_ERROR',
      isLogedIn: false,
      jwt: null
    });
  } else {
    dispatch({
      type: 'JWT_USER_START',
    });

    try {

      const response = await fetch('http://localhost:3002/api/users/jwt_check',
      {
        headers: { 'Authorization': jwt }
      })

      if (response.status === 200) {
        dispatch({
          type: 'JWT_USER_SUCCESS',
        });
        
      } else {
        dispatch({
          type: 'JWT_USER_ERROR',
          isLogedIn: false,
          jwt: null
        });

      }

      
    } catch(e) {
      dispatch({
        type: 'JWT_USER_ERROR',
        isLogedIn: false,
        jwt: null
      });

    }
  }
  

}



export const clearErrors = () => {
  return {
    type: 'USER_ERROR_CLEAR',
  }
}