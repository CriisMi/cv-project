import { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const skillsList = this.props.skills.map((skill) => (
      <li key={skill}>{skill}</li>
    ));
    const languagesList = this.props.languages.map((skill) => (
      <li key={skill}>{skill}</li>
    ));
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
        <ul>{skillsList}</ul>
        <div className="header">Languages</div>
        <ul>{languagesList}</ul>
      </div>
    );
  }
}

export default Sidebar;
