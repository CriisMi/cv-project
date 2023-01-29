import { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      occupation: "",
      phone: "",
      mail: "",
      social: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
            <input type="text" name="name" placeholder="Mary Smith" />
          </label>
          <label>
            Occupation:
            <input type="text" name="occupation" placeholder="Architect" />
          </label>
          <label>
            Phone number:
            <input type="tel" name="phone" placeholder="+123456789" />
          </label>
          <label>
            E-mail:
            <input type="e-mail" name="mail" placeholder="mary@smith.com" />
          </label>
          <label>
            Social URL:
            <input
              type="URL"
              name="social"
              placeholder="linkedin.com/marysmith"
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
