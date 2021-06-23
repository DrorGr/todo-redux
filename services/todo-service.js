import { storageService } from "./async-storage.service.js";
import { utilService } from "./util-service.js";

export const todoService = {
  query,
  remove,
  // markComplete,
  save,
};

const STORAGE_KEY = "todoDB";
var gTodos;
const _titles = [
  "Buy bread and butter",
  "Send the email",
  "Remind Chris to bring wine",
  "Get some nice socks",
  "Clean the backyard",
];

_createTodos();
// console.log("gTodos =", gTodos);

function query() {
  return storageService.query(STORAGE_KEY);
}

function remove(id) {
  // splice keeps the pointer to the array. filter doesn't
  console.log ('todo service will remove =',id)
  return storageService.remove(STORAGE_KEY, id);
}

function save(todo) {
  if (todo._id) {
    return storageService.put(STORAGE_KEY, todo);
  } else {
    return storageService.post(STORAGE_KEY, todo);
  }
}

function _createTodos() {
  storageService.query(STORAGE_KEY).then((todos) => {
    if (!todos || !todos.length) {
      todos = _makeTodos();
      gTodos = todos;
      return storageService.postMany(STORAGE_KEY, gTodos);
    }
  });
}

function _makeTodos() {
  const todos = [];
  for (let i = 0; i < 5; i++) {
    const todo = _makeTodo();
    todos.unshift(todo);
  }
  return todos;
}

function _makeTodo() {
  const todo = {
    _id: utilService.makeId(),
    title: _titles.pop(),
    importance: utilService.getRandomInt(1, 5),
    createdAt:
      Date.now() -
      utilService.getRandomInt(
        1000 * 60 * 60 * 24 * 10,
        1000 * 60 * 60 * 24 * 30
      ),
    isCompleted: Math.random() > 0.5 ? true : false,
  };
  todo.completedAt = todo.isCompleted
    ? Date.now() - utilService.getRandomInt(0, 1000 * 60 * 60 * 4)
    : null;
  return todo;
}
