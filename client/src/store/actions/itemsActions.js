import axios from 'axios';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEM_BY_ID = 'FETCH_ITEM_BY_ID';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

const endpoint = process.env.REACT_APP_API_URL;

const token = localStorage.getItem('jwt');
const options = {
   headers: {
      authorization: token,
   },
};

export const getItems = () => dispatch => {
   dispatch({ type: LOADING, message: 'Fetching items.' });

   axios
      .get(`${endpoint}/api/items`)
      .then(res => {
         dispatch({ type: FETCH_ITEMS, payload: res.data });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};

export const getItemById = id => dispatch => {
   dispatch({ type: LOADING, message: 'Fetching item.' });

   axios
      .get(`${endpoint}/api/items/:id`, id)
      .then(res => {
         dispatch({ type: FETCH_ITEM_BY_ID, payload: res.data });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};

export const updateItem = id => dispatch => {
   dispatch({ type: LOADING, message: 'Updating item.' });

   axios
      .get(`${endpoint}/api/items/:id`, id, options)
      .then(res => {
         dispatch({ type: UPDATE_ITEM, message: res.message });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};

export const deleteItem = id => dispatch => {
   dispatch({ type: LOADING, message: 'Deleting item.' });

   axios
      .get(`${endpoint}/api/items/:id`, id, options)
      .then(res => {
         dispatch({ type: DELETE_ITEM, message: res.message });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};
