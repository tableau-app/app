import React from 'react';
import Upload from './Upload';
import Nav from './Nav';

function AddPic({ user }){
  return(

    <div>
      <Nav/>
      <Upload user={user} />
    </div>
  );
}

export default AddPic;
