const Sidebar = (props) => {
  let personalInfo = props.personalInfo;

  return (
    <div>
      <ul className="title">
        <li className="name">{personalInfo.name}</li>
        <li className="occupation">{personalInfo.occupation}</li>
      </ul>
      <div className="header">Personal Info</div>
      <ul>
        <li className="info">Phone {personalInfo.phone}</li>
        <li className="info">E-mail {personalInfo.mail}</li>
        <li className="info">Portfolio {personalInfo.social}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
