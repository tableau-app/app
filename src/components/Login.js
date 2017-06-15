import React from 'react';
import Auth from './Auth';
import styled from 'styled-components';

const AuthDiv = styled.div`
  min-width: 25%;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #eee;
`;

const ImgDiv = styled.div`
  width: 45%;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;


export const Login = () => (
  <Wrapper >
    <ImgDiv>
      <img src="https://s3-us-west-2.amazonaws.com/tableau-users-images/laptop-landingimg.png" alt='laptop' style={{ width: '90%'}} />
    </ImgDiv>
    <AuthDiv>
      <Auth />
    </AuthDiv>
  </Wrapper>
);