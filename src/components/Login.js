import React from 'react';
import Auth from './Auth';
import styled from 'styled-components';

const AuthDiv = styled.div`
  min-width: 31%;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #eee;
  padding: 2em 0;
  margin-right: 5%;
`;

const ImgDiv = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  height: 90vh;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


export const Login = () => (
  <Wrapper >
    <ImgDiv>
      <img src="https://s3-us-west-2.amazonaws.com/tableau-users-images/landing-page-tableau-new-01.png" alt='laptop' style={{ width: '100%'}} />
    </ImgDiv>
    <AuthDiv>
      <Auth />
    </AuthDiv>
  </Wrapper>
);