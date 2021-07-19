import { GET_MOVIES_SUCCESS, SET_MOVIES } from "../constants";

const initialState = {
    error: null,
    movies: [],
};

export default function movieReducer (state = initialState, action) {
    console.log("Reducer", action.payload);
    switch (action.type) {
        case GET_MOVIES_SUCCESS:
            return { ...state, movies: action.payload };
        case SET_MOVIES:
            return { ...state, movies: action.payload };
    
        default:
            return state;
    }
}