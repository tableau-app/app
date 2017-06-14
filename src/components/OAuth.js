import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import authApi from '../api/authApi';
import { signup, signin } from '../actions';
import { connect } from 'react-redux';

class OAuth extends React.Component {

  responseFacebook(response) {
    const user = {
      username: response.email,
      password: response.id
    };
    authApi.signup(user);
  }

  render() {
    return (
      <div>
        <FacebookLogin socialId="1881119735461720"
          language="en_US"
          scope="public_profile,email"
          responseHandler={this.responseFacebook}
          xfbml={true}
          fields="id,email,name"
          version="v2.5"
          className="facebook-login"
          buttonText="Login With Facebook"/>
      </div>
    );
  }

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
)(OAuth);