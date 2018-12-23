import { GET_ALL_MESSAGES_SUCCESS, GET_LATEST_MESSAGES_SUCCESS } from '../actions/actionTypes';

export default (state = [], actions) => {
    switch (actions.type) {
        case GET_ALL_MESSAGES_SUCCESS:
            return actions.groupMessages;
        case GET_LATEST_MESSAGES_SUCCESS:
            const newState = Object.assign({}, state);
            newState.messages.push(actions.newMessage)
            return newState;
        default:
            return state;
    }
}