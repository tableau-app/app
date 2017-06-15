import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import GalleryCard from './GalleryCard';
import ThumbnailCard from './ThumbnailCard';
import Upload from './Upload';

const WelcomeGreeting = ({ name }) => (
  <p>Welcome {name}! <Link to="/feed">View your feed</Link></p>
);

function Feed({ user }) {
  return (
    <div>
    <Header/>
      { user ? <WelcomeGreeting name={user.username}/> : <Redirect to="/"/> }
      <ThumbnailCard user={user} />
      <GalleryCard user={user} />
      <Upload user={user} />
    </div>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps  
)(Feed);