import React, { Component } from "react";

class Events extends Component {
  state = {
    testEvent: null,
  };
  setTestEvent = (event) => {
    console.log(event.target.innerText);
    this.setState({
      testEvent: event,
    });
  };
  render() {
    return (
      <>
        <div>
          <h1
            className="test"
            style={{ width: "300px", border: "1px solid red" }}
            onClick={this.setTestEvent}
          >
            I want this text
          </h1>
          <br />
        </div>
        <div>
          <h1
            className="test"
            style={{ width: "300px", border: "1px solid red" }}
            onClick={() => {
              console.log(this.state.testEvent.target.innerText);
            }}
          >
            I don't want this text
          </h1>
        </div>
      </>
    );
  }
}
export default Events;
