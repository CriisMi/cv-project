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
        PersonalInfo:
        <FormPersInfo
          personalInfo={props.personalInfo}
          setPersonalInfo={props.setPersonalInfo}
        />
        Education:
        <FormEduExp
          education={props.education}
          setEducation={props.setEducation}
        />
        Experience:
        <FormEduExp
          education={props.experience}
          setEducation={props.setExperience}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
