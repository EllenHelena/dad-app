import { createContext, useReducer, ReactNode } from "react";

interface Task {
  _id: string;
  title: string;
  time: number;
  quantity: number;
}

interface TasksState {
  tasks: Task[] | null;
}

interface Action {
  type: string;
  payload: any;
}

interface TasksContextType extends TasksState {
  dispatch: (action: Action) => void;
}

export const TasksContext = createContext<TasksContextType>({
  tasks: null,
  dispatch: () => {},
});

export const tasksReducer = (state: TasksState, action: Action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        tasks: action.payload,
      };
    case "CREATE_TASK":
      return {
        tasks: [action.payload, ...(state.tasks || [])],
      };
    case "DELETE_TASK":
      return {
        tasks: (state.tasks || []).filter((t) => t._id !== action.payload._id),
      };
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

export const TasksContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    tasks: null,
  });

  return (
    <TasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
