import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryCard from './GalleryCard';
import Nav from './Nav';
import { fetchPosts, likePost, addComment } from '../actions';


class Feed extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleLike(postId) {
    this.props.likePost(postId);
  }

  handleAddComment(postId, comment) {
    this.props.addComment(postId, comment);
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
          onLike={() => this.handleLike(post._id)}
          onComment={(comment) => this.handleAddComment(post._id, comment)} />
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
    },
    addComment(postId, comment) {
      dispatch(addComment(postId, comment));
    }
  })
)(Feed);