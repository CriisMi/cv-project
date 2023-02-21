const ItemEduExp = (props) => {
  return (
    <div>
      <div>
        {props.startYear}-{props.endYear}
      </div>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default ItemEduExp;
