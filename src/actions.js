import * as constants from './constants';
import authApi from './api/authApi';
import { getStoredToken, request } from './api/request';


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

export function fetchPosts() {
  return dispatch => {
    return request.get('/posts')
      .then(posts => {
        dispatch({ type: constants.GET_POSTS, payload: posts });
      });
  };
}

export function likePost(postId) {
  return dispatch => {
    request.post(`/posts/${postId}/likes`)
      .then(({ likes }) => {
        dispatch({ 
          type: constants.POST_LIKED, 
          payload: {
            postId,
            likes
          }
        });
      });
  };
}

export function addComment(postId, comment) {
  return dispatch => {
    request.post(`/posts/${postId}/comments`, { comment })
      .then((comments) => {
        dispatch({ 
          type: constants.ADD_COMMENT, 
          payload: {
            postId,
            comments
          }
        });
      });
  };
}

export function signout() {
  return { type: constants.LOGOUT };
}

export function uploadPost(file) {
  return dispatch => {
    getSignedRequest(file)
      .then(({ file, signedRequest }) => {
        return uploadFile(file, signedRequest);
      })
      .then(() => {
        const data = {
          imageUrl: encodeURI(`https://tableau-users-images.s3.amazonaws.com/${file.name}`),
          caption: '',
          comments: []
        };
        return request.post('/posts', data);
      })
      .then(post => {
        dispatch({ type: constants.POST_UPLOADED, payload: post });
        dispatch({ type: constants.UPLOADED, payload: true });
        dispatch({ type: constants.UPLOADED, payload: false });
      },
      error => {
        dispatch({ type: constants.POST_FAILED, payload: error });
        dispatch({ type: constants.UPLOADED, payload: false });
      });
  };
}

function getSignedRequest(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const { signedRequest, url } = JSON.parse(xhr.responseText);
          resolve({ file, signedRequest, url });
        } else {
          reject('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  });
}

function uploadFile(file, signedRequest) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve();
        } else {
          reject('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  });
}