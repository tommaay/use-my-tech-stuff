import axios from 'axios';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_ITEMS = 'FETCH_USER_ITEMS';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

const endpoint = process.env.REACT_APP_API_URL;

const token = localStorage.getItem('jwt');
const options = {
   headers: {
      authorization: token,
   },
};

export const getUsers = () => dispatch => {
   dispatch({ type: LOADING, message: 'Fetching users.' });

   axios
      .get(`${endpoint}/api/users`)
      .then(res => {
         dispatch({ type: FETCH_USERS, payload: res.data.users });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};

export const getItemsByUserId = id => dispatch => {
   dispatch({ type: LOADING, message: 'Fetching items.' });

   axios
      .get(`${endpoint}/api/users/:id/items`, id)
      .then(res => {
         dispatch({ type: FETCH_USER_ITEMS, payload: res.data.items });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};

export const updateUser = id => dispatch => {
   dispatch({ type: LOADING, message: 'Updating user.' });

   axios
      .get(`${endpoint}/api/users/:id`, id)
      .then(res => {
         dispatch({ type: UPDATE_USER, message: res.message });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};

export const deleteUser = id => dispatch => {
   dispatch({ type: LOADING, message: 'Deleting user.' });

   axios
      .get(`${endpoint}/api/users/:id`, id)
      .then(res => {
         dispatch({ type: DELETE_USER, message: res.message });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};
