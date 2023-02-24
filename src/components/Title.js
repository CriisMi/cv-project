import "../styles/Title.css";

const Title = (props) => {
  return (
    <div className="title">
      <ul>
        <li className="name">{props.name}</li>
        <li className="occupation">{props.occupation}</li>
      </ul>
    </div>
  );
};

export default Title;
