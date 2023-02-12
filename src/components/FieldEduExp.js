const Field = (props) => {
  return (
    <div>
      <input type="number" name="startYear" placeholder={props.startYear} />
      <input type="number" name="endYear" placeholder={props.endYear} />
      <input type="text" name="title" placeholder={props.title} />
      <input
        type="textarea"
        name="description"
        placeholder={props.description}
      />
      <button onClick={props.onAddBtnClick}>Add</button>
      <button
        onClick={(e) => {
          props.onRemoveBtnClick(e, props.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Field;
