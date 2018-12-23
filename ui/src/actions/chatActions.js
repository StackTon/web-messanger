import { GET_ALL_MESSAGES_SUCCESS, GET_LATEST_MESSAGES_SUCCESS } from './actionTypes';

function getAllMessagesSuccess(groupMessages) {
    return {
        type: GET_ALL_MESSAGES_SUCCESS,
        groupMessages: groupMessages
    }
}

function getLatestMessageSuccess(newMessage) {
    return {
        type: GET_LATEST_MESSAGES_SUCCESS,
        newMessage: newMessage
    }
}

export function getAllMessagesAction(groupMessages) {
    return (dispatch) => {
        dispatch(getAllMessagesSuccess(groupMessages));
    }
}


export function getLatestMessageAction(newMessage) {
    return (dispatch) => {
        dispatch(getLatestMessageSuccess(newMessage));
    }
}