import { todoService } from "../../services/todo-service.js";

export function loadTodos(filter) {
  console.log("filterBy =", filter);

  return (dispatch) => {
    if (!filter) {
      return todoService
        .query()
        .then((todos) => {
          const action = {
            type: "SET_TODOS",
            todos,
          };
          dispatch(action);
        })

        .catch((err) => {
          dispatch({ type: "TODOS_ERR", err });
        });
    }
    return todoService
      .query()
      .then((todos) => {
        if (filter.filterBy === "completed")
          todos = todos.filter((todo) => todo.isCompleted);

        if (filter.filterBy === "not-completed")
          todos = todos.filter((todo) => !todo.isCompleted);

        if (filter.filterBy === "importance")
          todos = todos.filter((todo) => todo.importance > 3);

        if (filter.searchBy) {
          todos = todos.filter((todo) => {
            const regex = new RegExp(filter.searchBy, "i");
            return regex.test(todo.title);
          }); 
          
        }

        const action = {
          type: "SET_TODOS",
          todos,
        };

        dispatch(action);
      })

      .catch((err) => {
        dispatch({ type: "TODOS_ERR", err });
      });
  };
}

export function addTodo(title, importance) {
  const newTodo = {
    title,
    importance,
    createdAt: Date.now(),
  };
  return (dispatch) => {
    return todoService
      .save(newTodo)
      .then((newTodo) => {
        const action = {
          type: "ADD_TODO",
          newTodo,
        };
        dispatch(action);
      })
      .catch((err) => {
        dispatch({ type: "TODOS_ERR", err });
      });
  };
}

export function removeTodo(id) {
  return (dispatch) => {
    return todoService.remove(id).then(() => {
      const action = {
        type: "REMOVE_TODO",
        id,
      };
      dispatch(action);
    });
  };
}

export function update(todo) {
  return (dispatch) => {
    return todoService
      .save(todo)
      .then((todo) => {
        const action = {
          type: "UPDATE_TODO",
          todo,
        };
        dispatch(action);
      })
      .catch((err) => {
        dispatch({ type: "TODOS_ERR", err });
      });
  };
}
