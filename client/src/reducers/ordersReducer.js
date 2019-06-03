const ordersReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_ORDERS_START':
    case 'CREATE_ORDER_START':
    case 'DELETE_ORDER_START':
      return {
        ...state,
        isFetching: true,
        message: null
      }
    case 'FETCH_ORDERS_SUCCESS':  
      return {
        ...state,
        isFetching: false,
        list: action.list,
        message: action.message
      }
    case 'FETCH_ORDERS_ERROR':
    case 'CREATE_ORDER_ERROR':
    case 'CREATE_ORDER_SUCCESS':
    case 'DELETE_ORDER_ERROR':
    case 'DELETE_ORDER_SUCCESS':
      return {
        ...state,
        isFetching: null,
        message: action.message
      }
    case 'ORDERS_MESSAGE_CLEAR':
      return {
        ...state,
        message: null,
      }
    case 'ORDERS_CLEAR':
        return {
          ...state,
          list: []
        }
    default:
      return state; 
  }
}

export default ordersReducer;