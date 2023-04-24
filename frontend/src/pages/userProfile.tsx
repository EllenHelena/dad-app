import { Link } from "react-router-dom";
import TaskDetails from "../components/TaskDetails";
import { useTasksContext } from "../hooks/useTasksContext";

const UserProfile = () => {
  const { tasks } = useTasksContext();

  return (
    <div className="user-profile">
      <h1>Daddy's Babbies</h1>
      <Link className="link-babyProfile" to="/babyProfile">
        <button className="goToBabyBtn">Go to Baby Anna Profile</button>
      </Link>
      <div className="user-tasks">
        {tasks?.map((task) => (
          <TaskDetails task={task} key={task._id} showDeleteButton={false} showCheckBox={true} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
