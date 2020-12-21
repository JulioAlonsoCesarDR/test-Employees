import { CHANGE_USER } from "../actions/type";

const changeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_USER:
            return {

                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}
export default changeReducer;