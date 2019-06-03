export const loadState = () => {
  try {
    const data = localStorage.getItem('state');
    if (!data) {
      return 
    }
    return JSON.parse(data);
  } catch(e) {
    return
  }
}

export const saveState = (state) => {
  try {
    const data = JSON.stringify(state)
    localStorage.setItem('state', data)
  } catch(e) {
    return
  }
}