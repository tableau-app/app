import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../actions';

function Header({ user, signout }) {
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
)(Header);