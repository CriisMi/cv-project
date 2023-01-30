import { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="title">
          <li className="name">{this.props.name}</li>
          <li className="occupation">{this.props.occupation}</li>
        </ul>
        <div className="header">Personal Info</div>
        <ul>
          <li className="info">Phone {this.props.phone}</li>
          <li className="info">E-mail {this.props.mail}</li>
          <li className="info">Portfolio {this.props.social}</li>
        </ul>

        <div className="header">Skills</div>
      </div>
    );
  }
}

export default Sidebar;
