import React from 'react';
import styled from 'styled-components';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import TiMessage from 'react-icons/lib/ti/message';
import { request } from '../api/request';

const Div = styled.div`
  width: 600px;
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
`;

const ChatIcon = styled(TiMessage)`
  font-size: 2em;
  margin-left: .5em;
  cursor: pointer;
`;


const Footer = styled.footer`
  padding: .5em;
`;

function handleLike(postId, user) {
  return request.post(`/posts/${postId}/likes`, user);
}

function generateRandomUserAvatar() {
  return Math.floor(Math.random() * 99);
}

function generateRandomPerson() {
  let coin = Math.floor(Math.random() * 2);
  return coin ? 'women' : 'men';
}

export default function GalleryCard({ user, post, onLike }) {
  return (
    <Div>
      <Header>
        <Avatar 
          src={`https://randomuser.me/api/portraits/${generateRandomPerson()}/${generateRandomUserAvatar()}.jpg`} 
          alt="some-lady"/>
        <Username>{post.user.username}</Username>
      </Header>

      <ImgWrapper>
        <Img src={post.imageUrl} alt={post.caption}/>
      </ImgWrapper>

      <Footer>
        <HeartIcon onClick={onLike} /> 
        {post.likes.length && <span>{post.likes.length}</span>}
        <ChatIcon /> 
        {/*TODO: add handler that opens text input and/or shows comments for post*/}
      </Footer>
    </Div>
  );
}
