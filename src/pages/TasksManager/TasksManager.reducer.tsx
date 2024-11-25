type Task = { id: number; title: string; completed: boolean };
type TaskAction =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "DELETE"; payload: number }
  | { type: "LOAD"; payload: string };

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "DELETE":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};
