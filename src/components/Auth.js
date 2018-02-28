import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import Credentials from './Credentials';
import { signup, signin } from '../actions';

const Div = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const P = styled.p`
  margin: .5em 0;
`;

const Heading = styled.h1`
  margin: 0 auto;
  font-size: 3em;
  text-align: center;
  font-family: 'Petit Formal Script', cursive;
`;

const Hr = styled.hr`
  margin: 0 auto;
  border: 0; 
  height: 1px; 
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
`;

const Error = styled.pre`
  color: red;
  height: 20px;
  text-align: center;
  margin: 15px auto;
`;

const ButtonStyle = {
  display: 'inline-block'
};

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signupForm: false
    };

  }
  render() {
    const { user, signin, signup, error } = this.props;

    if (user) return <Redirect to='/feed' />;

    return (
      <div>
        <Heading>Tableau</Heading>
        {this.state.signupForm === false
          ?
          <div>
            <Credentials callToAction="Sign up" submit={signup} />
            <Div>
              <Hr />
              <Error>
                {error}
              </Error>
              <P>Already have an account?
                <FlatButton style={ButtonStyle} primary={true} onClick={() => this.setState({ signupForm: true })}>Sign In</FlatButton>
              </P>

            </Div>
          </div>
          :
          <div>
            <Credentials callToAction="Sign in" submit={signin} />
            <Div>
              <Hr />
              <Error>
                {error}
              </Error>
              <P>Not yet registered?
                <FlatButton style={ButtonStyle} primary={true} onClick={() => this.setState({ signupForm: false })}>Sign Up</FlatButton>
              </P>
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