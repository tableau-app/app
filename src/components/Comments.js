import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  margin: 1em .5em 0 1.5em;
`;

export default function Comments({ onComment, postId }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      onComment(postId, e.target.comment.value);  
      e.target.reset();
    }}>
      <Input name="comment"/>
      <button type="submit">submit</button>
    </form>
  );
}

Comments.propTypes = {
  onComment: PropTypes.func.isRequired
};