import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { request } from '../api/request';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getSignedRequest(file) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          this.uploadFile(file, response.signedRequest, response.url);
        }
        else {
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  }

  uploadFile(file, signedRequest, url) {
    const data = {
      user: this.props.user._id,
      imageUrl: encodeURI(`https://tableau-users-images.s3.amazonaws.com/${file.name}`),
      caption: '',
      comments: []
    };

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          request.post('/me/posts', data)
            .then(() => this.setState({ submitted: true }));
        } else {
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  handleSubmit(file) {
    if (file == null) alert('No file selected.');

    this.getSignedRequest(file);
  }

  render() {

    if (this.state.submitted) return <Redirect to="./feed" />;

    return (
      <div >
        <p id="status">Please select a file</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit(e.target['file-input'].files[0]);
          e.target.reset();
        }}>
          <input type="file" accept="image/*" id="file-input" />
          <input type="submit" />
        </form>
      </div >
    );
  }
}

export default Upload;
