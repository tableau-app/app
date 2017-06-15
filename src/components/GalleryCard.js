import React from 'react';
import styled from 'styled-components';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import TiMessage from 'react-icons/lib/ti/message';

const Div = styled.div`
  width: 600px;
  margin: 0 auto 2em;
  border: 1px solid #222;
  border-radius: 5px;
  background-color: #eee;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.5);
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
`;

const ChatIcon = styled(TiMessage)`
  font-size: 2em;
  margin-left: .5em;
`;

const EllipsisIcon = styled.a`
  font-size: 2em;
  position: absolute;
  right: 1em;
  text-decoration: none;
    :visited: #222;
  padding: 5px;
`;

const Footer = styled.footer`
  padding: .5em;
`;

function generateRandomUserAvatar() {
  return Math.floor(Math.random() * 99);
}

function generateRandomPerson() {
  let coin = Math.floor(Math.random() * 2);
  return coin ? 'women' : 'men';
}

export default function GalleryCard({ user, post }) {
  return (
    <Div>
      <Header>
        <Avatar 
          src={`https://randomuser.me/api/portraits/${generateRandomPerson()}/${generateRandomUserAvatar()}.jpg`} 
          alt="some-lady"/>
        <Username>{user.username}</Username>
        <EllipsisIcon href="">···</EllipsisIcon>
      </Header>

      <ImgWrapper>
        <Img src={post.imageUrl} alt={post.caption}/>
      </ImgWrapper>

      <Footer>
        <HeartIcon /> <ChatIcon />
      </Footer>
    </Div>
  );
}