import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Credentials from './Credentials';
import { signup, signin } from '../actions';

function Auth({ user, signin, signup, location }) {
  const redirect = '/feed';

  if(user) return <Redirect to={redirect}/>;
  
  return (
    <div>
        <Switch>
          <Route path="/auth/signin" component={() => (
            <div>
              <p>Not yet registered? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials submit={signin}/>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials submit={signup} allowName={true}/>
            </div>
          )}/>
        </Switch>
        {/*{error && <Error>{ error }</Error>}*/}
    </div>
  );
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