import ItemEduExp from "./ItemEduExp";

const BodyEduExp = (props) => {
  let itemsList = props.items;
  return (
    <div>
      {itemsList.map((item) => (
        <ItemEduExp
          key={item.key}
          startYear={item.startYear}
          endYear={item.endYear}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default BodyEduExp;
