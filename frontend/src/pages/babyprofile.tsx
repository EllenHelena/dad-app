import { useEffect } from "react";
import { useTasksContext } from "../hooks/useTasksContext";
import TaskDetails from "../components/TaskDetails";
import AddTask from "../components/addTask";
import { Link } from "react-router-dom";

const BabyProfile = () => {
  const { tasks, dispatch } = useTasksContext();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/schedule");
        const json = await response.json();
        if (response.ok) {
          dispatch({ type: "SET_TASKS", payload: json });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="baby-profile">
      <div className="schedule">
        {tasks?.map((task) => (
          <TaskDetails task={task} key={task._id} showDeleteButton={true} showCheckBox={false} />
        ))}
      </div>
      <AddTask />
      <Link className="link-babyProfile" to="/">
         <button className="goToBabyBtn">Back to User Profile</button>
         </Link>
    </div>
  );
};

export default BabyProfile;
