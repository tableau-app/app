import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const Input = styled.input`
  margin: 35px auto;
  display: block;
  width: 60%;
  padding: 10px;
  font-size: 1em;
`;

const ButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10% 30%'
};

export default function Credentials({ submit, callToAction }) {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        const { elements } = e.target;
        const data = Object.keys(elements).reduce((obj, key) => {
          obj[key] = elements[key].value;
          return obj;
        }, {});
        
        submit(data);
        e.target.reset();
      }}>
        <Input placeholder='username' name="username" />
        <Input placeholder='password' type="password" name="password" />
        <RaisedButton type="submit" style={ButtonStyle}>{callToAction} </RaisedButton>
      </form>
    </div>
  );
}