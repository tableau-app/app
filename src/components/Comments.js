import React from 'react';

export default function Comments() {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        console.log(e.target.comment.value);  
      }}>
        <input name="comment"/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}