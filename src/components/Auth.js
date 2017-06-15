import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Credentials from './Credentials';
import { signup, signin } from '../actions';

const Error = styled.pre`
  color: red;
`;

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signupForm: true
    };

  }
  render() {
    const { user, signin, signup } = this.props;

    if (user) return <Redirect to='/feed' />;

    return (
      <div>
        {this.state.signupForm
          ?
          <div>
            <button onClick={() => this.setState({ signupForm: false })}>
              Sign In</button>
            <Credentials callToAction="Sign up" submit={signup} />
          </div>
          :
          <div>
            <p>Not yet registered<button onClick={() => this.setState({ signupForm: true })}>
            Sign Up</button></p>
            <Credentials callToAction="Sign in" submit={signin} />
          </div>
        }
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    error: state.authError,
    user: state.user
  }),
  dispatch => ({
    signup(user) { dispatch(signup(user)); },
    signin(credentials) { dispatch(signin(credentials)); }
  })
)(Auth));