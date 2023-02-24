import "../styles/Form.css";
import FormEduExp from "./FormEduExp";
import FormPersInfo from "./FormPersInfo";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.toggleEditing();
  };

  return (
    <div>
      <form>
        <div className="header">PersonalInfo</div>
        <FormPersInfo
          personalInfo={props.personalInfo}
          setPersonalInfo={props.setPersonalInfo}
        />
        <div className="header">Education</div>
        <FormEduExp
          education={props.education}
          setEducation={props.setEducation}
          id={"e"}
        />
        <div className="header">Experience</div>
        <FormEduExp
          education={props.experience}
          setEducation={props.setExperience}
          id={"i"}
        />
        <button className="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
