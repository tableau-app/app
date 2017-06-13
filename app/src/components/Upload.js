import React, { Component } from 'react';

class Upload extends Component {
  constructor(props) {
    super(props);

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
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('check the bucket!');
        }
        else {
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
    return (
      <div >
        <p id="status">Please select a file</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit(e.target['file-input'].files[0]);
        }}>
          <input type="file" id="file-input" />
          <input type="submit" />
        </form>
      </div >
    );
  }
}

export default Upload;
