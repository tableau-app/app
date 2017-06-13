import React from 'react';

export default function Credentials({ submit }) {
  return (
    <div>
      <p>Not registered?, Sign up</p>
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
        <label>Username:<input name="username" /></label>
        <label>Password:<input name="password" /></label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}