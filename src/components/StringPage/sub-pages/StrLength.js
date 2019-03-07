import React from 'react';
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class StrLength extends React.Component {
  render() {
    return (
      <div>
        <h1>.length</h1>
        <hr/>
        <div className="sublabel">Description:</div>
        <p className="subtext">Extracts parts of a string and returns the extracted parts in a new string.
          <ul> 
            <li>Use the start and end parameters to specify the part of the string you want to extract.</li>
            <li>Use a negative number to select from the end of the string.</li>
          </ul> 
        </p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">string.length
          <ul></ul>
          </p>
        <div className="sublabel">Example:</div>
        <div className="example">
            <iframe height="400px" width="100%" src="https://repl.it/@Zgutier5/length?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>        </div>
      </div>
    );
  }
}

export default StrLength;