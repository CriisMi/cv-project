import BodyEduExp from "./BodyEduExp";

const Body = (props) => {
  return (
    <div>
      <div>
        <div className="header">EDUCATION</div>
        <BodyEduExp items={props.education} />
      </div>
      <div>
        <div className="header">EXPERIENCE</div>
        <BodyEduExp items={props.experience} />
      </div>
    </div>
  );
};

export default Body;
