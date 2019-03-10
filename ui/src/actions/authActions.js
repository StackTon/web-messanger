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
            console.log(username);
            if(username !== '') {
                const data = await addNewNickname(username);
                dispatch(addNewNicknameSuccess(data.username));
            } else {
                console.log('here');
                dispatch(addNewNicknameSuccess(''));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
