import { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}

export default Form;
