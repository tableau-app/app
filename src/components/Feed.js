import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import GalleryCard from './GalleryCard';

const WelcomeGreeting = ({ name }) => (
  <p>Welcome {name}! <Link to="/feed">View your feed</Link></p>
);

function Feed({ user }) {
  return (
    <div>
    <Header/>
      <h1>Welcome to Tableau</h1>
      { user ? <WelcomeGreeting name={user.username}/> : <Redirect to="/"/> }
      <GalleryCard user={user} />
    </div>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps  
)(Feed);