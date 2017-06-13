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
import OAuth from './components/OAuth';

const Routes = (
  <Switch> 
    <Route exact path="/" render={() => <Feed/>}/>;
    <Route path="/auth" render={() => <Auth />}/>
    {/*<PrivateRoute exact path="/albums" render={() => <Albums/>}/>;
    <PrivateRoute path="/albums/:id" render={({ match }) => <AlbumDetail id={match.params.id}/>}/>;*/}
    <Redirect to="/"/>
  </Switch>  
);

class App extends Component {

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
          <OAuth/>
        </div>
      </Router>
    );
  }
}

export default App;
