import { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: {
        editing: 1,
        submitted: 0,
      },
    };

    this.editInfo = this.editInfo.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  editInfo() {
    this.setState({
      current: { editing: 1, submitted: 0 },
    });
  }

  submitInfo() {
    this.setState({
      current: { editing: 0, submitted: 1 },
    });
  }

  render() {
    return (
      <div className="body">
        <div className="form">
          {this.state.current.submitted ? (
            <button onClick={this.editInfo}>Edit</button>
          ) : null}
          {this.state.current.editing ? (
            <div>
              <Form />
              <button onClick={this.submitInfo}>Submit</button>
            </div>
          ) : null}
        </div>
        <div className="sidebar"></div>
        <div className="info">
          <div className="sectionTitle">Personal Info</div>
        </div>
      </div>
    );
  }
}

export default App;
