import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import Logout from './Logout';

const Title = styled.div`
  font-size: 2em;
  float: left;
  margin: .5em 0 1em .5em;
`;

const Div = styled.div`
  background: #eee;
  padding: 1em;
  font-size: 1.25em;
  font-weight: bold;
  clear: both;
`;

const SignoutWrapper = styled.div`
  text-align: right;
`;

const WelcomeGreeting = ({ name }) => (
  <p> {name} <Link to="/feed"></Link></p>
);

function Nav({user, posts}) {
  return (
    <Headroom>
      <Div>
        <Title>
        <Link to="/feed">tableau</Link>
        </Title>
        <SignoutWrapper>
          {user ? <WelcomeGreeting name={user.username} /> :  <Redirect to="/" />}
          <Logout />
          <Link to="/AddPic">Add an Image</Link>
        </SignoutWrapper>
      </Div>
    </Headroom>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps
)(Nav);
