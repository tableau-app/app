import React from 'react';
import Auth from './Auth';
import styled from 'styled-components';

const Div = styled.div`
  width: 48%;
  margin: 1.5em auto;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #eee;
  padding: 2em 0;
  float: left;
  display: inline-block;
`;

const ImgDiv = styled.div`
  width: 48%;
  display: inline-block;
  float: left;
`;


export const Login = () => (
  <div>
    <ImgDiv>
      <img src="https://s3-us-west-2.amazonaws.com/tableau-users-images/laptop-landingimg.png" alt='laptop' style={{ width: '90%'}} />
    </ImgDiv>
    <Div>
      <Auth />
    </Div>
  </div>
);