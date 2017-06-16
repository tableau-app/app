import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  margin: 1em .5em 0 1.5em;
`;
const Ul = styled.ul`
  margin-left: 1em;
`;

const Username = styled.span`
  font-weight: bold;
  font-size: 1em;
  margin-right: .5em;
`;

const Comment = styled.span`
  color: #333;
  font-size: .75em;
`;

const Li = styled.li`
  margin: .5em 0;
`;

export default function Comments({ onComment, comments }) {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        onComment(e.target.comment.value);
        e.target.reset();
      }}>
        <Input name="comment"/>
        <button type="submit">submit</button>
      </form>
      <Ul>
        {comments.map(comment => (
          <Li key={comment._id}> 
            <Username>
              {comment.user.username}
            </Username> 
            <Comment>
              {comment.text}
            </Comment>
          </Li>))}
      </Ul>
    </div>
  );
}

Comments.propTypes = {
  onComment: PropTypes.func.isRequired
};