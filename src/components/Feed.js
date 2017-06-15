import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { request } from '../api/request';
import GalleryCard from './GalleryCard';
import ThumbnailCard from './ThumbnailCard';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    request.get('/posts')
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { user } = this.props;
    const { posts } = this.state;
    return (
      <div>
        {posts.map(post => (
          <GalleryCard key={post._id} user={user} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps
)(Feed);