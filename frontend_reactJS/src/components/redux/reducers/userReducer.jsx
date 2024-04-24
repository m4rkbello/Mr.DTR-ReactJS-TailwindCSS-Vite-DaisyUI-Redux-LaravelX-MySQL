import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    UPLOAD_AND_UPDATE_IMAGE_REQUEST,
    UPLOAD_AND_UPDATE_IMAGE_FAILURE,
    UPLOAD_AND_UPDATE_IMAGE_SUCCESS,
} from '../types/userTypes.jsx';

const initialState = {
    users: [],
    loading: false,
    error: null,
    isAuthenticated: false,
    loggedInUser: null,
    uploadAndUpdateImageLoading: false,
    uploadAndUpdateImageError: null,
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
        case ADD_USER_REQUEST:
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOGIN_USER_REQUEST:
        case UPLOAD_AND_UPDATE_IMAGE_REQUEST:
            return  {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                loading: false,
                error: null
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user),
                loading: false,
                error: null,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
                loading: false,
                error: null
            };
        case REGISTER_USER_SUCCESS:
            case LOGIN_USER_SUCCESS:
                return {
                    ...state,
                    isAuthenticated: true,
                    loggedInUser: action.payload,
                    loading: false,
                    error: null
                };
        case UPLOAD_AND_UPDATE_IMAGE_FAILURE:
            return {
                ...state,
                uploadAndUpdateImageLoading: false,
                uploadAndUpdateImageError: null,
            };
        case FETCH_USERS_FAILURE:
        case ADD_USER_FAILURE:
        case UPDATE_USER_FAILURE:
        case DELETE_USER_FAILURE:
        case REGISTER_USER_FAILURE:
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPLOAD_AND_UPDATE_IMAGE_FAILURE:
            return {
                ...state,
                uploadAndUpdateImageLoading: false,
                uploadAndUpdateImageError: action.payload,
            }
        default:
            return state;
    } 
}


export default userReducer;
