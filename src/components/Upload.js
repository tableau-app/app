import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import { uploadPost } from '../actions';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(file) {
    if (file == null) alert('No file selected.');
    this.props.uploadPost(file);
  }


  render() {

    const ButtonStyle = {
      width: '175px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      margin: '1em auto',
    };

    const UploadText = styled.p`
      padding: 12px;
    `;


    return (
      <div className="upload">
        <p id="status"></p>
        <h2>Upload</h2>
        <p>Choose a file from your computer or camera</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit(e.target['file-input'].files[0]);
          e.target.reset();
        }}>
          <input type="file" accept="image/*" id="file-input" />
          <RaisedButton type="submit" style={ButtonStyle}><UploadText>Submit</UploadText></RaisedButton>
        </form>
      </div >
    );
  }
}

export default connect(
  null,
  dispatch => ({
    uploadPost(file) {
      dispatch(uploadPost(file));
    }
  })
)(Upload);
