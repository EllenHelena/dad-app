import { TasksContext } from "../context/taskContext";
import { useContext } from "react";

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error(
      "useTasksContext should be used inside a TasksContextProvider"
    );
  }

  return context;
};
