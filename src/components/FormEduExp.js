import { useState } from "react";
import Field from "./FieldEduExp";

const FormEduExp = (props) => {
  const [id, setId] = useState(`e2`);

  let defaultEdu = {
    startYear: 2012,
    endYear: 2018,
    title: "UniTN",
    description: "",
    index: 0,
  };

  let educationList = props.education;

  const onAddBtnClick = (e) => {
    e.preventDefault();
    setId((prevId) => `e${+prevId[1] + 1}`);
    defaultEdu.key = id;
    let newEducation = educationList.concat(defaultEdu);

    let newnewEducation = newEducation.map((element, i) => {
      element.index = i;
      return element;
    });
    console.log(id);
    props.setEducation(newnewEducation);
  };

  const onRemoveBtnClick = (e, i) => {
    e.preventDefault();
    let newEducation = educationList.filter((item) => item.index !== i);
    let newnewEducation = newEducation.map((element, i) => {
      element.index = i;
      return element;
    });
    props.setEducation(newnewEducation);
  };

  return (
    <div>
      <ul>
        {educationList.map((field, i) => (
          <Field
            field={props.education[i]}
            index={i}
            key={props.education[i].key}
            onRemoveBtnClick={onRemoveBtnClick}
            education={props.education}
            setEducation={props.setEducation}
          />
        ))}
      </ul>
      <button onClick={onAddBtnClick}>Add</button>
    </div>
  );
};

export default FormEduExp;
