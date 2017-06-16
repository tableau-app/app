import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
`;

function Logout({ user, signout }) {
  return (
    <Button onClick={signout}>Logout</Button>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  dispatch => ({
    signout() { dispatch(signout()); },
  })
)(Logout);