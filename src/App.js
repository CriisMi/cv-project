import { Component } from "react";
import "./App.css";
import Education from "./components/Education";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: {
        editing: 1,
        submitted: 0,
      },
      data: {
        name: "Mary Smith",
        occupation: "Architect",
        phone: "+123456789",
        mail: "mary@smith.com",
        social: "linkedin.com/marysmith",
      },
    };

    this.editInfo = this.editInfo.bind(this);
    this.getData = this.getData.bind(this);
  }

  editInfo() {
    this.setState({
      current: { editing: 1, submitted: 0 },
    });
  }

  getData = (data) => {
    this.setState({
      current: { editing: 0, submitted: 1 },
      data: data,
    });
  };

  render() {
    return (
      <div className="body">
        <div className="form">
          {this.state.current.submitted ? (
            <button onClick={this.editInfo}>Edit</button>
          ) : null}
          {this.state.current.editing ? (
            <div>
              <Form {...this.state.data} onSubmit={this.getData} />
              <Education />
            </div>
          ) : null}
        </div>
        <Sidebar {...this.state.data} />
      </div>
    );
  }
}

export default App;
