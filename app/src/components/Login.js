import React from 'react';

export default function Login(props) {

  return (
    <form>
      <label>Username<input type="text" /></label>
      <label>Password<input type="text" /></label>
      <button type="submit"></button>
    </form>
  );
}