import { ADD_NEW_NICKNAME_SUCCESS } from './actionTypes';
import { addNewNickname } from '../api/remote';

function addNewNicknameSuccess(username) {
    return {
        type: ADD_NEW_NICKNAME_SUCCESS,
        username: username
    }
}

export function addNewNicknameAction(username) {
    return async (dispatch) => {
        try {
            const data = await addNewNickname(username);
            dispatch(addNewNicknameSuccess(data.username));
        }
        catch (err) {
            console.log(err);
        }
    }
}

