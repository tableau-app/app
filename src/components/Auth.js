import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import Credentials from './Credentials';
import { signup, signin } from '../actions';

const Div = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const P = styled.p`
  margin: .5em 0;
`;

const H1 = styled.h1`
  width: 75%;
  margin: 0 auto;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

const Hr = styled.hr`
  margin: 1.5em auto;
  border: 1px solid lightgrey;
`;

const Error = styled.pre`
  color: red;
`;

const ButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10% 25%',
  backgroundColor: 'grey500'//not working?
};

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
        <H1>tableau</H1>
        {this.state.signupForm
          ?
          <div>
            <Credentials callToAction="Sign up" submit={signup} />
            <Div>
              <Hr />
              <P>Already have an account?</P>
              <RaisedButton style={ButtonStyle} onClick={() => this.setState({ signupForm: false })}>Sign In</RaisedButton>
            </Div>
          </div>
          :
          <div>
            <Credentials callToAction="Sign in" submit={signin} />
            <Div>
              <Hr />
              <P>Not yet registered?</P>
              <RaisedButton style={ButtonStyle} onClick={() => this.setState({ signupForm: true })}>Sign Up</RaisedButton>
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