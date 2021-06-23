
const initialState = {
  todos: [],
  filterBy: "",
  searchBy: "",
  isLoading: false,
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.todos, isLoading: false };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.id),
      };

    case "ADD_TODO":
      return { ...state, todos: [action.newTodo, ...state.todos] };

    case "SET_TODO":
      return { ...state, todos: [...state.todos, action.todo] };

    case "UPDATE_TODO":
      const idx = todos.findIndex((todo) => todo_id === action.todo._id);
      return {
        ...state,
        todos: [...state.todos, todos.splice(idx, 1, action.todo)],
      };

    default:
      return state;
  }
}
