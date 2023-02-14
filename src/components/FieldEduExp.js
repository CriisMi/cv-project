const Field = (props) => {
  let educationList = props.education;
  let field = educationList[props.index];

  const handleChange = (e) => {
    const value = e.target.value;
    educationList[props.index][e.target.name] = value;
    e.target.placeholder = value;
  };

  return (
    <div>
      <input
        type="number"
        name="startYear"
        placeholder={field.startYear}
        onChange={handleChange}
      />
      <input
        type="number"
        name="endYear"
        placeholder={field.endYear}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder={field.title}
        onChange={handleChange}
      />
      <input
        type="textarea"
        name="description"
        placeholder={field.description}
        onChange={handleChange}
      />
      <button
        onClick={(e) => {
          props.onRemoveBtnClick(e, props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Field;
