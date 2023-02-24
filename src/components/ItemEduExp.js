import "../styles/ItemEduExp.css";

const ItemEduExp = (props) => {
  return (
    <div className="item">
      <div className="years">
        {props.startYear}-{props.endYear}
      </div>
      <div>
        <div className="edu-exp-title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
};

export default ItemEduExp;
