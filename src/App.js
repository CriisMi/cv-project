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
        />
      </div>
      <Sidebar personalInfo={personalInfo} />
    </div>
  );
};

export default App;
