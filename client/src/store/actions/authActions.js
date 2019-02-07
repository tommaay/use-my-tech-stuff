import axios from 'axios';

export const LOADING = 'LOADING';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const ERROR = 'ERROR';

const endpoint = process.env.REACT_APP_API_URL;

export const login = userInfo => dispatch => {
   dispatch({ type: LOADING, message: 'Logging in.' });

   axios
      .post(`http://localhost:5000/api/auth/login`, userInfo)
      .then(res => {
         localStorage.setItem('jwt', res.data.token);

         dispatch({ type: LOGIN, payload: res.data });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};

export const register = userInfo => dispatch => {
   dispatch({ type: LOADING, message: 'New user is registering.' });

   axios
      .post(`${endpoint}/api/auth/register`, userInfo)
      .then(res => {
         localStorage.setItem('jwt', res.data.token);
         dispatch({ type: REGISTER, payload: res.data });
      })
      .catch(err => {
         dispatch({ type: ERROR, error: err });
      });
};

export const logout = () => {
   localStorage.removeItem('jwt');
   return { type: LOGOUT };
};
