export const fetchEquipment = (visible) => async dispatch => {
  
  dispatch({
    type: 'FETCH_EQUIPMENT_START',
    isFetching: true,
    visible
  })

  try {
    const data = await fetch('http://localhost:3002/api/equipment');
    const list = await data.json();

    dispatch({
      type: 'FETCH_EQUIPMENT_SUCCESS',
      isFetching: false,
      list
    })
  } 
  catch(e) {
    dispatch({
      type: 'FETCH_EQUIPMENT_ERROR',
      isFetching: false
    })
  }

}

export const fetchEquipmentBySlug = (slug) => async dispatch => {
  
  dispatch({
    type: 'FETCH_EQUIPMENT_ITEM_START',
    isFetching: true
  })

  try {
    const data = await fetch(`http://localhost:3002/api/equipment/${slug}`);
    const item = await data.json();

    dispatch({
      type: 'FETCH_EQUIPMENT_ITEM_SUCCESS',
      isFetching: false,
      payload: item
    })
  } 
  catch(e) {
    dispatch({
      type: 'FETCH_EQUIPMENT_ITEM_ERROR',
      isFetching: false
    })
  }

}

export const showMore = () => (dispatch, getState) => {

  const visible = getState().equipment.visible;
  const count = getState().equipment.list.length;

  if (count > visible) {
    const newVisible = getState().equipment.visible + 4;
  
    dispatch({
      type: 'SHOW_MORE_EQUIPMENT',
      visible: newVisible
    })
  }

}

export const clearVisibleEquipment = (count) => {
  return {
    type: 'CLEAR_VISIBLE_EQUIPMENT',
    visible: count
  }
}
