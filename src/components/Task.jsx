/* eslint-disable react/prop-types */

const Task = ({ props, dispatch }) => {
  const removeTask = () => {
    dispatch({ type: "DELETE", payload: { id: props.id } });
  };

  return (
    <div className="bg-slate-200 p-2.5 rounded-sm flex flex-row gap-3 items-center">
      <input
        type="checkbox"
        name="done"
        id="done"
        onChange={() => removeTask(props.id)}
      />
      <p className="text-lg font-normal text-slate-800">{props.task}</p>
    </div>
  );
};

export default Task;
