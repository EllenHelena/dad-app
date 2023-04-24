import { useTasksContext } from "../hooks/useTasksContext";
import { useState } from "react";

type Task = {
  _id: string;
  title: string;
  time: number;
  quantity: number;
};

type TaskDetailsProps = {
  task: Task;
  showDeleteButton: boolean;
  showCheckBox: boolean;
};

const TaskDetails = ({ task, showDeleteButton, showCheckBox }: TaskDetailsProps) => {
  const { dispatch } = useTasksContext();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = async () => {
    console.log(task._id);
    const response = await fetch(
      `http://localhost:4000/api/schedule/${task._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_TASK", payload: json });
      //handle the dispatch in the taskContext.tsx reducer
    }
  };

  return (
    <div className="task-details">
      <h4 className="task-title">{task.title}</h4>
      <p className="task-time">
        <strong>time: </strong>
        {task.time}
      </p>
      <p>
        <strong className="task-quantity">quantity: </strong>
        {task.quantity}
      </p>
      {showDeleteButton && (
        <span className="delete-btn" onClick={handleClick}>
          x
        </span>
      )}
      {showCheckBox && (
        <input className="checkBox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      )}
    </div>
  );
};

export default TaskDetails;
