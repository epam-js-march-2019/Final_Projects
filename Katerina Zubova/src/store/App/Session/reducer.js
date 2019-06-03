import { getDefaultState } from "./defaultState";
import * as ACTION_TYPES from "./actionTypes";


export const session = (state=getDefaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOG_IN:
            return {
                ...state,
                user: {
                    name: action.username,
                    email: action.email,
                    password: action.password,
                    trekking: action.trekking
                },
                errorMsg: '',
            }
        case ACTION_TYPES.LOG_OUT:
            return  {
                ...state,
                user: null,
                errorMsg: '',
            }
        case ACTION_TYPES.LOG_IN_FAILURE:
            return {
                ...state,
                user: null,
                errorMsg: action.errorMsg
            }
        case ACTION_TYPES.SIGN_UP:
            return {
                ...state,
                user: {
                    ...state.user,
                    trekking: [...state.user.trekking, action.trekking]
                },
                errorMsg: ''
            }
        default:
            return state
    }
}