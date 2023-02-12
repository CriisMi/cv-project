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
      id: "e1",
      startYear: 2012,
      endYear: 2018,
      title: "UniTN",
      description: "",
      index: 0,
    },
    {
      id: "e2",
      startYear: 2032,
      endYear: 2045,
      title: "Uni",
      description: "",
      index: 1,
    },
  ]);

  const toggleEditing = () => {
    setEditing(!editing);
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
        />
      </div>
      <Sidebar personalInfo={personalInfo} />
    </div>
  );
};

export default App;
