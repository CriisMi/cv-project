import BodyEduExp from "./BodyEduExp";

const Body = (props) => {
  return (
    <div>
      <div>
        EDUCATION
        <BodyEduExp items={props.education} />
      </div>
      <div>
        EXPERIENCE
        <BodyEduExp items={props.experience} />
      </div>
    </div>
  );
};

export default Body;
