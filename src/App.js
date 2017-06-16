import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Switch,
         Redirect
} from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import { connect } from 'react-redux';
import { checkForToken } from './actions';
import { Login } from './components/Login';
import styled from 'styled-components';
import AddPic from './components/AddPic';

const Footer = styled.div`
  text-align: center;
  color: lightgrey;
  padding: 1em 0;
  min-height: 1%;
`;

const Routes = (
  <Switch>
    <Route exact path="/feed" render={() => <Feed />} />
    <Route exact path="/" render={() => <Login />} />
    <Route path="/AddPic" render={() => <AddPic />} />
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
          <main>
            {Routes}
          </main>
          <Footer>
            &copy; Tableau 2017
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
