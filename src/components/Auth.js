import React from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, signin } from '../actions';

function Auth({ user, error, signin, signup }) {

  return (
    <div>
      <p>Not registered?, Sign up</p>
      <form onSubmit={e => {
        e.preventDefault();
        const { elements } = e.target;
        const data = Object.keys(elements).reduce((obj, key) => {
          obj[key] = elements[key].value;
          return obj;
        }, {});
        signup(data);
        e.target.reset();
      }}>
        <label>Username:<input type="text" /></label>
        <label>Password:<input type="text" /></label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default connect(
  state => ({
    error: state.authError,
    user: state.user
  }),
  dispatch => ({
    signup(user) { dispatch(signup(user)); },
    signin(credentials) { dispatch(signin(credentials)); }
  })
)(Auth);