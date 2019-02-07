import {
   LOADING,
   ERROR,
   FETCH_ITEMS,
   FETCH_ITEM_BY_ID,
   UPDATE_ITEM,
   DELETE_ITEM,
} from '../actions/itemsActions';

const initialState = {
   items: [],
   message: null,
   error: null,
   isLoading: false,
   item: null,
};

const itemsReducer = (state = initialState, action) => {
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

      case FETCH_ITEMS:
         return {
            ...state,
            message: null,
            isLoading: false,
            items: action.payload,
         };

      case FETCH_ITEM_BY_ID:
         return {
            ...state,
            message: null,
            isLoading: false,
            item: action.payload,
         };

      case UPDATE_ITEM:
         return {
            ...state,
            message: action.message,
            isLoading: false,
         };

      case DELETE_ITEM:
         return {
            ...state,
            message: action.message,
            isLoading: false,
         };

      default:
         return state;
   }
};

export default itemsReducer;
