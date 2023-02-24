const FormPersInfo = (props) => {
  let formInfo = props.personalInfo;

  const handleChange = (e) => {
    const value = e.target.value;
    formInfo[e.target.name] = value;
    e.target.placeholder = value;
    props.setPersonalInfo(formInfo);
  };

  return (
    <div className="form-pers-info">
      <input
        type="text"
        name="name"
        placeholder="Full name"
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        onChange={handleChange}
      />
      <input
        type="e-mail"
        name="mail"
        placeholder="E-mail"
        onChange={handleChange}
      />
      <input
        type="URL"
        name="social"
        placeholder="Web"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormPersInfo;
