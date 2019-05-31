export const UserReducer = (state = {}, action) => {
    switch(action.type) {
        case "AUTHORIZATION":
            state = action.data;
            return state;
        case "GET_USER":
            return state.user;
        default:
            return state;
    }
};
export default UserReducer;

