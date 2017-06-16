import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions';

function Logout({ user, signout }) {
  return (
    <button onClick={signout}>Logout</button>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  dispatch => ({
    signout() { dispatch(signout()); },
  })
)(Logout);