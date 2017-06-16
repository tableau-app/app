import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import Logout from './Logout';

const Title = styled.div`
  font-size: 2em;
`;

const Div = styled.div`
  background: #eee;
  padding: 10px;
  font-size: 1.25em;
  font-weight: bold;
`;

const SignoutWrapper = styled.div`
  text-align: right;
`;

const WelcomeGreeting = ({ name }) => (
  <span> {name} </span>
);

function Nav({user, posts}) {
  return (
    <Headroom>
      <Div>
        <Title>
        <h1><Link to="/feed">tableau</Link></h1>
        </Title>
        <SignoutWrapper>
          <Link to="/AddPic">Upload</Link>
          {user ? <WelcomeGreeting name={user.username} /> :  <Redirect to="/" />}
          <Logout />
        </SignoutWrapper>
      </Div>
    </Headroom>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps
)(Nav);
