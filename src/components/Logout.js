import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions';
import FlatButton from 'material-ui/FlatButton';

const ButtonStyle = {
  width: '150px',
  height: '50px',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold'
};

function Logout({ user, signout }) {
  return (
    <FlatButton style={ButtonStyle} onClick={signout}>Logout</FlatButton>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  dispatch => ({
    signout() { dispatch(signout()); },
  })
)(Logout);