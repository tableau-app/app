import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const WelcomeGreeting = ({ name }) => (
  <p>Welcome {name}! <Link to="/feed">View your feed</Link></p>
);

function Feed({ user }) {
  return (
    <div>
      <h1>Welcome to Tableau</h1>
      { user ? <WelcomeGreeting name={user.username}/> : <Redirect to="/"/> }
    </div>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps  
)(Feed);