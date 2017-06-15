import React from 'react';
import Auth from './Auth';
import styled from 'styled-components';

const Div = styled.div`
  width: 400px;
  margin: 1.5em auto;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #eee;
  padding: 2em 0;
`;


export const Login = () => (
  <Div>
      <Auth/>
  </Div>
);