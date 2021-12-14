import { ADD_USER, GET_POSTS, GET_USERS, INIT_LOADER, STOP_LOADER } from "../actions";

const initialState = {
    users: [],
    loading: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_LOADER:
            return {
                ...state,
                loading: true
            }
            break;
        case STOP_LOADER:
            return {
                ...state,
                loading: false
            }
            break;
        case ADD_USER:
            const user = action.payload;
            return {
                ...state,
                users: [...state.users, user],
            }
            break;
    
        default:
            return state
    }
}