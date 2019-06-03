const equipmentReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_EQUIPMENT_START':
        return {
          ...state,
          visible: action.visible
        }
    case 'FETCH_EQUIPMENT_SUCCESS':
      return {
        ...state,
        list: action.list
      }
    case 'SHOW_MORE_EQUIPMENT':
      return {
        ...state,
        visible: action.visible
      }
    case 'CLEAR_VISIBLE_EQUIPMENT':
      return {
        ...state,
        visible: action.visible
      }
    case 'FETCH_EQUIPMENT_ITEM_SUCCESS':
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}

export default equipmentReducer;