import React, { Component } from 'react';
import styled from 'styled-components';
import Comments from './Comments';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import TiMessage from 'react-icons/lib/ti/message';

const Div = styled.div`
  width: 700px;
  margin: 2em auto;
  border: 1px solid #efefef;
  border-radius: 4px;
  background-color: #eee;
`;

const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  border-radius: 100%;
  border: 1px solid #222;
  width: 50px;
  margin-left: 1em;
`;

const Username = styled.span`
  font-weight: bold;
  margin-left: 1em;
  margin-right: 5em;
`;

const ImgWrapper = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  max-height: 700px;
`;

const HeartIcon = styled(MdFavoriteOutline)`
  font-size: 2em;
  margin-left: .5em;
  cursor: pointer;
  color: ${({ heart }) => heart.likes.length ? 'rgb(233 ,73, 73)' : '#222'};
`;

const LikeCount = styled.span`
  font-weight: bold;
  margin-left: 1em;
`;

const CommentIcon = styled(TiMessage)`
  font-size: 2em;
  margin-left: .5em;
  cursor: pointer;
`;

const Footer = styled.footer`
  padding: .5em;
`;

export default class GalleryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentClicked: false
    };
  }

  generateRandomUserAvatar() {
    return Math.floor(Math.random() * 99);
  }

  generateRandomPerson() {
    let coin = Math.floor(Math.random() * 2);
    return coin ? 'women' : 'men';
  }

  handleComments() {
    this.setState({ commentClicked: !this.state.commentClicked });
  }

  render() {
    const { post, onLike, onComment } = this.props;
    const { commentClicked } = this.state;
    return (
      <Div>
        <Header>
          <Avatar 
            src={`https://randomuser.me/api/portraits/${this.generateRandomPerson()}/${this.generateRandomUserAvatar()}.jpg`} 
            alt="some-lady"/>
          <Username>{post.user.username}</Username>
        </Header>

        <ImgWrapper>
          <Img src={post.imageUrl} alt={post.caption}/>
        </ImgWrapper>

        <Footer>
          <HeartIcon onClick={onLike} heart={post}/> 
          {post.likes.length > 0 && <LikeCount>{post.likes.length}</LikeCount>}
          <CommentIcon onClick={() => this.handleComments()}/>
          {post.comments.length > 0 && <LikeCount>{post.comments.length}</LikeCount>}
          {commentClicked && <Comments onComment={onComment} comments={post.comments} postId={post._id}/>}
        </Footer>
      </Div>
    );
  }
}
