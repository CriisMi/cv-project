import { useState } from "react";
import Field from "./FieldEduExp";

const FormEduExp = (props) => {
  const [education, setEducation] = useState(props.education);

  /* const onAddBtnClick = (e) => {
    e.preventDefault();
    setInputList(inputList.concat(<Field key={inputList.length} />));
  }; */

  const onRemoveBtnClick = (e, id) => {
    let newEducation = (education) =>
      education.filter((item) => item.id !== id);
    setEducation(newEducation);
    props.setEducation(newEducation);
  };

  return (
    <div>
      <ul>
        {education.map((field, i) => (
          <Field
            index={i}
            key={field.id}
            id={field.id}
            startYear={field.startYear}
            endYear={field.endYear}
            title={field.title}
            description={field.description}
            onRemoveBtnClick={onRemoveBtnClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default FormEduExp;
