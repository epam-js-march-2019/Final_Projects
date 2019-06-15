const initialState = {
  loggedUser: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        loggedUser: action.payload
      };
    case "REMOVE_LOGIN":
      return {
        ...state,
        loggedUser: action.payload
      };
    default:
      return state;
  }
};
