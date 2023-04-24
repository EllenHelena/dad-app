import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

interface AddTaskProps {}

const AddTask: React.FC<AddTaskProps> = () => {
  const { dispatch } = useTasksContext();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const task = { title, time, quantity };

    const response = await fetch("http://localhost:4000/api/schedule", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    } else {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setTime("");
      setQuantity("");

      console.log("new task added", json);
      dispatch({ type: "CREATE_TASK", payload: json });
    }
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <h3 className="add-task-title">Add task to schedule</h3>

      <label className="add-task-label">Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="add-task-input"
      />

      <label className="add-task-label">Time:</label>
      <input
        type="number"
        onChange={(e) => setTime(e.target.value)}
        value={time}
        className="add-task-input"
      />

      <label className="add-task-label">Quantity:</label>
      <input
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        className="add-task-input"
      />

      <button className="add-task-button">Add Task</button>
      {error && <div className="add-task-error">{error}</div>}
    </form>
  );
};

export default AddTask;
