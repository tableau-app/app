import React from 'react';
import OAuth from './OAuth';
import Auth from './Auth';
import styled from 'styled-components';

const Div = styled.div`
  width: 400px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid #222;
  border-radius: 5px;
  background-color: #eee;
`;


export const Login = () => (
  <Div>
    <div>
      <OAuth/>
    </div>
    <div>
      <Auth/>
    </div>
  </Div>
);