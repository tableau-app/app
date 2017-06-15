import React, { Component } from 'react';
import { connect } from 'react-redux';
import { request } from '../api/request';
import GalleryCard from './GalleryCard';
import Nav from './Nav';
import { fetchPosts, likePost } from '../actions';

class Feed extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleLike(postId) {
    this.props.likePost(postId);
  }

  render() {
    const { user, posts } = this.props;
    return (
      <div>
        <Nav />
        {posts.map(post => (
          <GalleryCard key={post._id} 
          user={user} 
          post={post} 
          onLike={() => this.handleLike(post._id)} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  dispatch => ({
    fetchPosts() {
      dispatch(fetchPosts());
    },
    likePost(postId) {
      dispatch(likePost(postId));
    }
  })
)(Feed);