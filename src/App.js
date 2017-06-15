import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Headroom from 'react-headroom';
import './App.css';
import Feed from './components/Feed';
import { connect } from 'react-redux';
import { checkForToken } from './actions';
import { Login } from './components/Login';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  color: lightgrey;
  margin: 3em 0;
`;

const Routes = (
  <Switch>
    <Route exact path="/feed" render={() => <Feed />} />
    <Route exact path="/" render={() => <Login />} />
    {/*<Route path="/auth" render={() => <Auth />}/>*/}
    <Redirect to="/" />
  </Switch>
);

class App extends Component {

  componentDidMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <Router>
        <div>
          <Headroom style={{ backgroundColor: 'lightgrey'}}>
            <div className="App-header">
              <h2>Tableau</h2>
            </div>
          </Headroom>
          <main>
            {Routes}
          </main>
          <Footer>
            © Tableau 2017
          </Footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    checkForToken() { dispatch(checkForToken()); }
  })
)(App);
