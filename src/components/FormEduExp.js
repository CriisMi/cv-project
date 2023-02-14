import { useState } from "react";
import Field from "./FieldEduExp";

const FormEduExp = (props) => {
  let educationList = props.education;
  const [id, setId] = useState(`${educationList[0].key[0]}2`);

  let defaultEdu = {
    startYear: 2012,
    endYear: 2018,
    title: "UniTN",
    description: "",
    index: 0,
  };

  const onAddBtnClick = (e) => {
    e.preventDefault();
    setId((prevId) => `${prevId[0]}${+prevId[1] + 1}`);
    defaultEdu.key = id;
    let newEducation = educationList.concat(defaultEdu);
    let newnewEducation = newEducation.map((element, i) => {
      element.index = i;
      return element;
    });
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
