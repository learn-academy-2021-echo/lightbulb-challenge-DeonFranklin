import React, { Component } from "react";
import Light from "./Light";

class AddSubtract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightArray: [],
    };
  }

  AddBoxes = () => {
    if (this.state.lightArray) {
      this.setState({ lightArray: [...this.state.lightArray, <Light />] });
    }
  };

  SubtractBoxes = () => {
    if (this.state.lightArray[0] !== false) {
      let newArr = [...this.state.lightArray];
      newArr.pop();
      this.setState({ lightArray: newArr });
    }
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.AddBoxes}>Add Lights</button>
          <br></br>
          <br></br>
          <button onClick={this.SubtractBoxes}>Remove Lights</button>
          <div>{this.state.lightArray}</div>
        </div>
      </>
    );
  }
}

export default AddSubtract;