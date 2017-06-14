import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 1px solid #222;
  border-radius: 5px;
`;

const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
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

const OverflowMenu = styled.button`
  float: right;
`;

const ImgWrapper = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  max-height: 700px;
`;

export default function GalleryCard({ user }) {
  return (
    <Div>
      <Header>
        <Avatar 
          src="https://randomuser.me/api/portraits/women/71.jpg" 
          alt="some-lady"/>
        <Username>{user.username}</Username>
        <OverflowMenu>...</OverflowMenu>
      </Header>

      <ImgWrapper>
        <Img src="http://media.istockphoto.com/photos/blank-box-picture-id518223207" alt="cube-in-a-box"/>
      </ImgWrapper>

      <footer>
        footer content
      </footer>
    </Div>
  );
}