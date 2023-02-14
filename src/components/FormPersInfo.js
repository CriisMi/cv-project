const FormPersInfo = (props) => {
  let formInfo = props.personalInfo;

  const handleChange = (e) => {
    const value = e.target.value;
    formInfo[e.target.name] = value;
    e.target.placeholder = value;
    props.setPersonalInfo(formInfo);
  };

  return (
    <div>
      <label>
        Full name:
        <input
          type="text"
          name="name"
          placeholder={formInfo.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Occupation:
        <input
          type="text"
          name="occupation"
          placeholder={formInfo.occupation}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone number:
        <input
          type="tel"
          name="phone"
          placeholder={formInfo.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        E-mail:
        <input
          type="e-mail"
          name="mail"
          placeholder={formInfo.mail}
          onChange={handleChange}
        />
      </label>
      <label>
        Social URL:
        <input
          type="URL"
          name="social"
          placeholder={formInfo.social}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FormPersInfo;
