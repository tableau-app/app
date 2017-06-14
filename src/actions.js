import * as constants from './constants';
import authApi from './api/authApi';
import { getStoredToken } from './api/request';

export function checkForToken() {
  return dispatch => {
    const token = getStoredToken();
    if (!token) return;

    dispatch({ type: constants.GOT_TOKEN, payload: token });

    authApi.verify()
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: constants.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: constants.AUTH_FAILED, payload: error });
      });
  };
}

export function signin(credentials) {
  return dispatch => {
    authApi.signin(credentials)
      .then(({ token }) => {
        dispatch({ type: constants.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: constants.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: constants.AUTH_FAILED, payload: error });
      });
  };
}

export function signup(user) {
  return dispatch => {
    authApi.signup(user)
      .then(({ token }) => {
        dispatch({ type: constants.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: constants.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: constants.AUTH_FAILED, payload: error });
      });
  };
}

export function signout() {
  return { type: constants.LOGOUT };
}