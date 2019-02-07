import {
   LOADING,
   ERROR,
   FETCH_USERS,
   FETCH_USER_BY_ID,
   FETCH_USER_ITEMS,
   UPDATE_USER,
   DELETE_USER,
} from '../actions/usersActions';

import { LOGIN, LOGOUT, REGISTER } from '../actions/authActions';

const initialState = {
   users: [],
   userItems: [],
   message: null,
   error: null,
   user: null,
   userId: null,
   isLoggedIn: false,
   isLoading: false,
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOADING:
         return {
            ...state,
            message: action.payload,
            isLoading: true,
         };

      case ERROR:
         return {
            ...state,
            error: action.error,
            isLoading: false,
         };

      case LOGIN:
         return {
            ...state,
            isLoading: false,
            isLoggedIn: true,
            userId: state.users.find(user => user.userId === action.payload),
         };

      case REGISTER:
         return {
            ...state,
            isLoading: false,
            isLoggedIn: true,
            userId: state.users.find(user => user.userId === action.payload),
         };

      case LOGOUT:
         return {
            users: [],
            message: null,
            error: null,
            user: null,
            isLoggedIn: false,
            isLoading: false,
         };

      case FETCH_USERS:
         return {
            ...state,
            isLoading: false,
            users: action.payload,
         };

      case FETCH_USER_BY_ID:
         return {
            ...state,
            isLoading: false,
            user: action.payload,
         };

      case FETCH_USER_ITEMS:
         return {
            ...state,
            isLoading: false,
            userItems: action.payload,
         };

      case UPDATE_USER:
         return {
            ...state,
            isLoading: false,
            message: action.message,
         };

      case DELETE_USER:
         return {
            ...state,
            isLoading: false,
            message: action.message,
         };

      default:
         return state;
   }
};

export default usersReducer;
