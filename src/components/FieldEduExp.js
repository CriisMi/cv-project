const Field = (props) => {
  let educationList = props.education;

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
        placeholder="Start year"
        onChange={handleChange}
      />
      <input
        type="number"
        name="endYear"
        placeholder="End year"
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="textarea"
        name="description"
        placeholder="Description"
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
