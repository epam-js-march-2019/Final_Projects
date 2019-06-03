const usersReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_USER_START':
    case 'REGISTER_USER_START':
      return {
        ...state,
        ...action.payload,
        isFetching: true,
        isLogedIn: false,
        error: null
      }
    case 'LOGIN_USER_SUCCESS':
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        email: action.email,
        jwt: action.jwt,
        isFetching: false,
        isLogedIn: true
      }
    case 'USER_LOGOUT':
    case 'JWT_USER_ERROR':
      return {
        ...state,
        email: null,
        jwt: null,
        isFetching: null,
        isLogedIn: false
      }
    case 'LOGIN_USER_ERROR':
      return {
        ...state,
        email: null,
        jwt: null,
        isFetching: false,
        isLogedIn: false,
        loginError: action.error
      }
    case 'REGISTER_USER_ERROR':
      return {
        ...state,
        isFetching: false,
        registerError: action.error
      }
    case 'USER_ERROR_CLEAR':
      return {
        ...state,
        loginError: null,
        registerError: null
      }
    default:
      return state; 
  }
}

export default usersReducer;