import{CHANGE_AUTH} from './types';

export function authenticate(isLoggedIn) {
    // console.log('authenticate user');
    // console.log('is logged in?', isLoggedIn);
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

