import "../styles/Sidebar.css";

const Sidebar = (props) => {
  let personalInfo = props.personalInfo;

  return (
    <div>
      <div className="header">CONTACT</div>
      <ul>
        <li className="info">
          <div>Phone</div> <div>{personalInfo.phone}</div>
        </li>
        <li className="info">
          <div>Mail</div> <div>{personalInfo.mail}</div>
        </li>
        <li className="info">
          <div>Web</div> <div>{personalInfo.social}</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
