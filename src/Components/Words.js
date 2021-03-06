import React, { Component } from "react";
import "./Words.css";

class Words extends Component {
  constructor(props) {
    super(props);
  }

render() {
  
// console.log(this.props.wordListConjunction)
    let conjunctionOptions = this.props.wordListConjunction.map((item, idx) => (
      <li
        className="servedWord"
        key={idx}
        onClick={() => this.props.handleWordInput(item)}
      >
        {item.word}
      </li>
    ));
  
    let wordOptions = this.props.wordListWord.map((item, idx) => (
      <li
        className="servedWord"
        key={idx}
        onClick={() => this.props.handleWordInput(item)}
      >
        {item.word}
      </li>
      ));



    return (
      <ul className="servedWords">
        <div className="pickFrom">
        
          {conjunctionOptions}
          {wordOptions}
          </div>
      </ul>
    );
  }
}

export default Words;
