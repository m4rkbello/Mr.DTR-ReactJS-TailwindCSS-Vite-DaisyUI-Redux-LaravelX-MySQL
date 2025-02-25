import {
    FETCH_ATTENDANCES_REQUEST,
    FETCH_ATTENDANCES_SUCCESS,
    FETCH_ATTENDANCES_FAILURE,
    ADD_ATTENDANCE_REQUEST,
    ADD_ATTENDANCE_SUCCESS,
    ADD_ATTENDANCE_FAILURE,
    UPDATE_ATTENDANCE_REQUEST,
    UPDATE_ATTENDANCE_SUCCESS,
    UPDATE_ATTENDANCE_FAILURE,
    DELETE_ATTENDANCE_REQUEST,
    DELETE_ATTENDANCE_SUCCESS,
    DELETE_ATTENDANCE_FAILURE,
    QRCODE_ATTENDANCE_REQUEST,
    QRCODE_ATTENDANCE_SUCCESS,
    QRCODE_ATTENDANCE_FAILURE,
} from '../types/attendanceTypes.jsx';

const initialState = {
    attendances: [],
    loading: false,
    error: null,
    lastFetched: null,
};

const attendanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ATTENDANCES_REQUEST:
        case ADD_ATTENDANCE_REQUEST:
        case UPDATE_ATTENDANCE_REQUEST:
        case DELETE_ATTENDANCE_REQUEST:
        case QRCODE_ATTENDANCE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
           
        };
        case FETCH_ATTENDANCES_SUCCESS:
            return {
                ...state,
                attendances: action.payload,
                loading: false,
                error: null,
                lastFetched: Date.now(),
            };
        case ADD_ATTENDANCE_SUCCESS:
            return {
                ...state,
                attendances: [...state.attendances, action.payload], // Add the new attendance to the array
                loading: false,
                error: null
            };
        case UPDATE_ATTENDANCE_SUCCESS:
            return {
                ...state,
                attendances: state.attendances.map(attendance => attendance.id === action.payload.id ? action.payload : attendance),
                loading: false,
                error: null,
            };
        case DELETE_ATTENDANCE_SUCCESS:
            return {
                ...state,
                attendances: state.attendances.filter(attendance => attendance.id !== action.payload),
                loading: false,
                error: null
            };
            case QRCODE_ATTENDANCE_SUCCESS:
                return {
                    ...state,
                    attendances: Array.isArray(state.attendances) 
                        ? [...state.attendances, action.payload]
                        : [action.payload],
                    loading: false,
                    error: null
                }
        case FETCH_ATTENDANCES_FAILURE:
        case ADD_ATTENDANCE_FAILURE:
        case UPDATE_ATTENDANCE_FAILURE:
        case DELETE_ATTENDANCE_FAILURE:
        case QRCODE_ATTENDANCE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default attendanceReducer;
