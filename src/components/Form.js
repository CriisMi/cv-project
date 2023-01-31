import { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
    e.target.placeholder = value;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Full name:
            <input
              type="text"
              name="name"
              placeholder={this.props.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Occupation:
            <input
              type="text"
              name="occupation"
              placeholder={this.props.occupation}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              name="phone"
              placeholder={this.props.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="e-mail"
              name="mail"
              placeholder={this.props.mail}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Social URL:
            <input
              type="URL"
              name="social"
              placeholder={this.props.social}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.submitInfo}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
