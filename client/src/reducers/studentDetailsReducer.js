import { GET_STUDENT_DETAILS, ENABLE_STUDENT_DETAILS_LOADING, DISABLE_STUDENT_DETAILS_LOADING } from "../actions/types";

const initialState = {
    studentData: [],
    loading: false,
};

function detail(state = initialState, action) {
    switch (action.type) {
        case GET_STUDENT_DETAILS:
            return {
                ...state,
                studentData: action.payload,
            };
        case ENABLE_STUDENT_DETAILS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case DISABLE_STUDENT_DETAILS_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}
export default detail;