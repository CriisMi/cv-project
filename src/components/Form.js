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
        <FormPersInfo
          personalInfo={props.personalInfo}
          setPersonalInfo={props.setPersonalInfo}
        />
        <FormEduExp
          education={props.education}
          setEducation={props.setEducation}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
