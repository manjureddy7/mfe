import { ADD_USER, GET_POSTS, GET_USERS, INIT_LOADER, STOP_LOADER } from '../actions';

export function getPosts() {
    return function(dispatch) {
        dispatch({type: INIT_LOADER});
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
          dispatch({ type: GET_POSTS, payload: posts });
          dispatch({ type: STOP_LOADER});
        });
    };
};

export function getUsers() {
    return ({
        type: GET_USERS
    })
};

export function addUser(user) {
    return ({
        type: ADD_USER,
        payload: user
    })
};