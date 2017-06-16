import React from 'react';
import styled from 'styled-components';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import TiMessage from 'react-icons/lib/ti/message';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

const Div = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #222;
  border-radius: 5px;
  background-color: #eee;
`;

const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  border-radius: 100%;
  border: 1px solid #222;
  width: 40px;
  margin-left: 1em;
`;

const Username = styled.span`
  font-weight: bold;
  margin-left: 1.5em;
  margin-right: 5em;
`;

const ImgWrapper = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  max-height: 350px;
`;

const HeartIcon = styled(MdFavoriteOutline)`
  font-size: 1.5em;
  margin-left: .2em;
  cursor: pointer;
`;

const ChatIcon = styled(TiMessage)`
  font-size: 1.5em;
  margin-left: .2em;
  cursor: pointer;
`;

const EllipsisIcon = styled.a`
  font-size: 1.5em;
  position: absolute;
  right: 0.25em;
  text-decoration: none;
    :visited: #222;
  padding: 3px;
  cursor: pointer;
`;

const Footer = styled.footer`
  padding: .5em;
`;

export default function ThumbnailCard({ user }) {
  return (
    <Div>
      <Header>
        <Avatar 
          src="https://randomuser.me/api/portraits/women/71.jpg" 
          alt="some-lady"/>
        <EllipsisIcon href="">···</EllipsisIcon>
      </Header>

      <ImgWrapper>
        <Img src="http://media.istockphoto.com/photos/blank-box-picture-id518223207" alt="cube-in-a-box"/>
      </ImgWrapper>

      <Footer>
        <HeartIcon /> <ChatIcon />
      </Footer>
    </Div>
  );
}
