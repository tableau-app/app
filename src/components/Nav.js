import React from 'react';
import Logout from './Logout';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Upload from './Upload';



const Div = styled.div`
  background: lightgrey;
  padding: 1em;
  font-size: 1.25em;
  font-weight: bold;
`;

const WelcomeGreeting = ({ name }) => (
  <p> {name} <Link to="/feed"></Link></p>
);

function Nav({user}) {

  return (
    <Headroom>
      <Div className="App-header">
        <h2>Tableau</h2>
        <Logout />
        {user ? <WelcomeGreeting name={user.username} /> : <Redirect to="/" />}
        <Upload />
      </Div>
    </Headroom>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps
)(Nav);
