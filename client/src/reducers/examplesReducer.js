const examplesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_EXAMPLES_START':
        return {
          ...state,
          visible: action.visible
        }
    case 'FETCH_EXAMPLES_SUCCESS':
      return {
        ...state,
        list: action.list,
      }
    case 'SHOW_MORE_EXAMPLES':
      return {
        ...state,
        visible: action.visible
      }
    case 'CLEAR_VISIBLE_EXAMPLES':
      return {
        ...state,
        visible: action.visible
      }
    default:
      return state;
  }
}

export default examplesReducer;