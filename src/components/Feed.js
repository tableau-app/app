import React from 'react';
import { connect } from 'react-redux';
import GalleryCard from './GalleryCard';
import ThumbnailCard from './ThumbnailCard';



function Feed({ user }) {
  return (
    <div>
      <ThumbnailCard user={user} />
      <GalleryCard user={user} />
    </div>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps
)(Feed);