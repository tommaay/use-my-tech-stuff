import { combineReducers } from 'redux';
import users from './usersReducer';
import items from './itemsReducer';

const rootReducer = combineReducers({
   users,
   items,
});

export default rootReducer;
