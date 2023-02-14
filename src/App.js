import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [editing, setEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Sarah Smith",
    occupation: "singer",
    phone: 4023,
    mail: "sarahsmith@email.com",
    social: "https://github.com/",
  });

  const [education, setEducation] = useState([
    {
      startYear: 2012,
      endYear: 2018,
      title: "UniTN",
      description: "",
      index: 0,
      key: `e1`,
    },
  ]);

  const [experience, setExperience] = useState([
    {
      startYear: 2019,
      endYear: 2022,
      title: "Microsoft",
      description: "",
      index: 0,
      key: `i1`,
    },
  ]);

  const toggleEditing = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <div className="body">
      {!editing ? <button onClick={toggleEditing}>Edit</button> : null}
      <div className={`form ${editing}`}>
        <Form
          toggleEditing={toggleEditing}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
        />
      </div>
      <Sidebar personalInfo={personalInfo} />
    </div>
  );
};

export default App;
