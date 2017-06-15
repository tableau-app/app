import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Credentials from './Credentials';
import { signup, signin } from '../actions';

const Div = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const P = styled.p`
  margin: .5em 0;
`;

const Hr = styled.hr`
  margin: 1.5em auto;
  border: 1px solid lightgrey;
`;

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
            <Credentials callToAction="Sign up" submit={signup} />
            <Div>
              <Hr />
              <P>Already have an account?</P>
              <button onClick={() => this.setState({ signupForm: false })}>Sign In</button>
            </Div>
          </div>
          :
          <div>
            <Credentials callToAction="Sign in" submit={signin} />
            <Div>
              <Hr />
              <P>Not yet registered?</P>
              <button onClick={() => this.setState({ signupForm: true })}>Sign Up</button>
            </Div>
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