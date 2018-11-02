import { combineReducers } from 'redux';
import login from './red_login';

const rootReducer = combineReducers({
    loginStatus: login,
})

export default rootReducer