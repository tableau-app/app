import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import authApi from '../api/authApi';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  responseFacebook(response) {
    console.log(response);
    const user = {
      username: response.email,
      password: response.id
    };
    console.log('USER', user);
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

export default Login;