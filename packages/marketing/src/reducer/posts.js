import { GET_POSTS, INIT_LOADER, STOP_LOADER } from "../actions";

const initialState = {
    posts: [],
    loading: false
}

export const postsReducer = (state = initialState, action) => {
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
        case GET_POSTS:
            const posts = action.payload;
            return {
                ...state,
                posts: posts,
            }
            break;
    
        default:
            return state
    }
}