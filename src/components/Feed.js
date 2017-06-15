import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { request } from '../api/request';
// import Header from './Header';
import GalleryCard from './GalleryCard';
import ThumbnailCard from './ThumbnailCard';
import Upload from './Upload';

const WelcomeGreeting = ({ name }) => (
  <p>Welcome {name}! <Link to="/feed"></Link></p>
);

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
    return (
      <div>
      {/*<Header/>*/}
        { user ? <WelcomeGreeting name={user.username}/> : <Redirect to="/"/> }
        {this.state.posts.map(post => (
          <GalleryCard key={post._id} user={user} post={post} />
        ))}
        {/*<ThumbnailCard user={user} />
        <GalleryCard user={user} />*/}
        <Upload user={user} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps  
)(Feed);