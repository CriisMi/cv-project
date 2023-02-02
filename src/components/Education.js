import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputList: [],
    };

    this.onAddBtnClick = this.onAddBtnClick.bind(this);
  }

  onAddBtnClick(e) {
    const inputList = this.state.inputList;
    this.setState({
      inputList: inputList.concat(<input key={inputList.length} />),
    });
  }

  render() {
    return (
      <div>
        <label>Education:</label>
        {this.state.inputList}
        <button type="addNew" onClick={this.onAddBtnClick}>
          +
        </button>
      </div>
    );
  }
}

export default Education;
