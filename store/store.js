const { createStore, applyMiddleware, combineReducers, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const thunk = ReduxThunk.default;

import { todoReducer } from "./reducers/todo.reducer.js";
import { userReducer } from "./reducers/user.reducer.js";

const rootReducer = combineReducers({
  todoModule: todoReducer,
  userModule: userReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
); //Passing the reducer
