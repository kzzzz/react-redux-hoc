import {combineReducers} from 'redux';
import authentication from './authentication';

const rootReducer = combineReducers({
    // state: (state = {}) => state
    authenticated: authentication
});

export default rootReducer;
