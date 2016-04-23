import {CHANGE_AUTH} from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case CHANGE_AUTH:
            // console.log(`authentication-reducer: action.type: ${action.type}, state: ${state}`);
            return action.payload;
        default:
            return state;
    }
}