import { ADD_NEW_NICKNAME_SUCCESS } from '../actions/actionTypes';

export default (state = '', action) => {
    switch(action.type) {
        case ADD_NEW_NICKNAME_SUCCESS:
            return action.username || state;
        default:
            return state;

    }
}