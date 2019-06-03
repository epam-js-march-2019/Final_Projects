import { clearErrors } from './users';

export const openModal = () => (dispatch) => {

  document.body.style.overflow = 'hidden';
  dispatch(clearErrors());
  
  dispatch({
    type: 'OPEN_MODAL',
    payload: true
  })
}

export const closeModal = () => (dispatch) => {

  document.body.style.overflowY = 'scroll';
  dispatch(clearErrors());
  
  dispatch({
    type: 'CLOSE_MODAL',
    payload: false
  })
  
}