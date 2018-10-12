import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'
import login from './red_login'

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBookReducer,
    loginStatus: login
})

export default rootReducer