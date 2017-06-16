import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import Logout from './Logout';

const Title = styled.div`
  font-size: 2em;
  font-family: 'Petit Formal Script', cursive;
`;

const Div = styled.div`
  background: #eee;
  padding: 10px;
  font-size: 1.25em;
  font-weight: bold;
  font-family: 'Petit Formal Script', cursive;
`;

const SignoutWrapper = styled.div`
  text-align: right;
  font-family: 'Raleway', sans-serif;
`;

const ButtonStyle = {
  width: '150px',
  height: '50px',
  fontFamily: 'Raleway, sans-serif',
};

const Username = ({ name }) => (
  <span> {name} </span>
);

function Nav({user, posts}) {
  return (
    <Headroom >
      <Div>
        <Title>
        <h1><Link to="/feed">Tableau</Link></h1>
        </Title>
        <SignoutWrapper>
          <Link to="/AddPic"><FlatButton style={ButtonStyle}>Upload</FlatButton></Link>
          {user ? <Username style={{ margin: '0 5px'}} name={user.username} /> :  <Redirect to="/" />}
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
