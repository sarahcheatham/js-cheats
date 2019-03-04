import React from "react";
import "./sub-pages.css";
// import PropTypes from 'prop-types';

class ArrIncludes extends React.Component {
  render() {
    return (
      <div>
        <h1>.includes()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The includes() method determines whether an array includes a certain
          value among its entries, returning true or false as appropriate.
        </p>
        <div className="sublabel">Syntax:</div>
<<<<<<< HEAD
        <p className="subtext">arr.includes(valueToFind[, fromIndex])</p>
=======
        <p className="subtext" />
        <p className="subtext">Determines whether an array contains a specified element.</p>
        <p className="subtext">Returns a boolean value.</p>
        <p className="subtext">Element: the element to search for.</p> 
        <p className="subtext">Start: Optional. Default at index 0. The position in the array to start the search.</p>
        <div className="sublabel">Syntax:</div>
        <p className="subtext">array.includes(element, start)</p>
>>>>>>> develop
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            height="400px"
            width="100%"
            src="https://repl.it/@William_Cruz/WretchedSpeedyBugs?lite=true"
            scrolling="no"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </div>
      </div>
    );
  }
}

export default ArrIncludes;
