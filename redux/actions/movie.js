import { GET_MOVIES_SUCCESS, SET_MOVIES } from "../constants";

export function getMovies() {
    // Make an api call
    // Set resulting data to the redux store
    return {
        type: GET_MOVIES_SUCCESS,
        // payload: data,
    };
}

export function setMovies(movies) {
    return {
        type: SET_MOVIES,
        payload: movies,
    };
}