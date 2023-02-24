import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Title from "./components/Title";

const App = () => {
  const [editing, setEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Sarah Smith",
    occupation: "Singer",
    phone: 4023,
    mail: "sarahsmith@email.com",
    social: "https://github.com/",
  });

  const [education, setEducation] = useState([
    {
      startYear: 2012,
      endYear: 2018,
      title: "my Uni",
      description:
        "Cras malesuada, erat eu porta volutpat, dolor risus lobortis erat, id lacinia nisl risus in eros. Aliquam vestibulum metus elit, nec posuere dui egestas ac. Proin molestie accumsan fermentum. ",
      index: 0,
      key: `e1`,
    },
  ]);

  const [experience, setExperience] = useState([
    {
      startYear: 2019,
      endYear: 2022,
      title: "Microsoft",
      description:
        "In et molestie felis. Maecenas tempor orci nisi, vel commodo turpis faucibus mattis. Praesent viverra libero pharetra arcu semper blandit. ",
      index: 0,
      key: `i1`,
    },
  ]);

  const toggleEditing = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <div className="body">
      {!editing ? (
        <button className="edit" onClick={toggleEditing}>
          EDIT
        </button>
      ) : null}
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

      <div className="cv">
        <div className="photo" />
        <Title name={personalInfo.name} occupation={personalInfo.occupation} />
        <Sidebar personalInfo={personalInfo} />
        <Body education={education} experience={experience} />
      </div>
    </div>
  );
};

export default App;
