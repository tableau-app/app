import React, { Component } from 'react';
import { connect } from 'react-redux';
import { request } from '../api/request';
import GalleryCard from './GalleryCard';
import Nav from './Nav';

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
        <Nav />
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