import { combineReducers } from 'redux';
import * as actions from './constants';

function user(state = null, action) {
  switch (action.type) {
    case actions.FETCHED_USER:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function token(state = null, action) {
  switch (action.type) {
    case actions.GOT_TOKEN:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function authError(state = null, action) {
  switch (action.type) {
    case actions.AUTH_FAILED:
      return action.payload;
    case actions.LOGOUT:
    case actions.GOT_TOKEN:
    case actions.FETCHED_USER:
      return null;
    default:
      return state;
  }
}

function uploaded(state = false, action) {
  switch (action.type) {
    case actions.UPLOADED:
      return action.payload;
    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case actions.POST_UPLOADED:
      return [ ...state, action.payload ];
    case actions.GET_POSTS:
      return action.payload;
    case actions.POST_LIKED: {
      const { postId, likes } = action.payload;
      const index = state.findIndex(post => post._id === postId);
      return [
        ...state.slice(0, index),
        { ...state[index], likes },
        ...state.slice(index + 1)
      ];
    }
    case actions.ADD_COMMENT: {
      const { postId, comments } = action.payload;
      const index = state.findIndex(post => post._id === postId);
      return [
        ...state.slice(0, index),
        { ...state[index], comments },
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}

export default combineReducers({
  user,
  token,
  authError,
  posts,
  uploaded
});