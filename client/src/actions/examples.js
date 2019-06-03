export const fetchExamples = (visible) => async dispatch => {

  dispatch({
    type: 'FETCH_EXAMPLES_START',
    isFetching: true,
    visible
  })

  try {
    const data = await fetch('http://localhost:3002/api/examples');
    const list = await data.json();

    dispatch({
      type: 'FETCH_EXAMPLES_SUCCESS',
      isFetching: false,
      list
    })
  } 
  catch(e) {
    dispatch({
      type: 'FETCH_EXAMPLES_ERROR',
      isFetching: false
    })
  }

}

export const showMore = () => (dispatch, getState) => {

  const visible = getState().examples.visible;
  const count = getState().examples.list.length;

  if (count > visible) {
    const newVisible = getState().examples.visible + 4;
  
    console.log(newVisible)
    dispatch({
      type: 'SHOW_MORE_EXAMPLES',
      visible: newVisible
    })
  }

}

export const clearVisibleExamples = (count) => {
  return {
    type: 'CLEAR_VISIBLE_EXAMPLES',
    visible: count
  }
}