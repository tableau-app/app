import React from 'react';
import Upload from './Upload';
import Nav from './Nav';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function AddPic({ user, uploaded }){
  if (uploaded) {
    return <Redirect to="/feed"/>;
  }

  return(

    <div>
      <Nav/>
      <Upload user={user} />
    </div>
  );
}

export default connect(
  state => ({
    error: state.authError,
    uploaded: state.uploaded
  })
)(AddPic);
