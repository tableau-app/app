import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Feed from './components/Feed';
import { connect } from 'react-redux';
import { checkForToken } from './actions';
import { GetStarted } from './components/GetStarted';

const Routes = (
  <Switch> 
    <Route exact path="/feed" render={() => <Feed/>}/>
    <Route exact path="/" render={() => <GetStarted/>}/>
    <Route path="/auth" render={() => <Auth />}/>
    <Redirect to="/"/>
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
          <div className="App">
            <div className="App-header">
              <h2>Welcome to Tableau</h2>
            </div>
          </div>
          <main>
            {Routes}
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state=> ({ user: state.user }),
  dispatch => ({
    checkForToken() { dispatch(checkForToken());}
  })
)(App);
