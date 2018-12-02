// Initial code from GitHub
// https://gist.github.com/AshikNesin/e44b1950f6a24cfcd85330ffc1713513

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Input} from 'reactstrap';


class ImageUpload extends Component {
  constructor(props) {
    super(props);


    this.state = {
      message: '',
    };
  }

  handleChange(file) {
    console.log(file.name);
    this.props.startLoad();
    let contents;
    const callbackProp = this.props.callback;


    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onloadend = () => {
      contents = reader.result;

      const request = new Request(
        'http://127.0.0.1:5000/decode',
        {
          method: 'POST',
          body: contents,
        },
      );

      fetch(request)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status_text);
          }
          return response.json();
        })
        .then((linterOutput) => {
          callbackProp(contents, linterOutput);
        });
    };
  }


  render() {
    const uploadButton = <Input type="file" id="file" placeholder="Encode" onChange={e => this.handleChange(e.target.files[0], this.props)} />;

    return (
      <div>
        {uploadButton}
        <h1 align="center" >{this.state.message}</h1>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  callback: PropTypes.func.isRequired,
  startLoad: PropTypes.func.isRequired,
};

export default ImageUpload;