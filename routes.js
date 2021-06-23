import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { TodoApp } from "./cmps/TodoApp.jsx";
import { TodoEdit } from "./cmps/TodoEdit.jsx";
import { TodoDetails } from "./cmps/TodoDetails.jsx";
import { UserProfile } from "./cmps/UserProfile/UserProfile.jsx";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/todos",
    component: TodoApp,
  },
  {
    path: "/todo/:todoId",
    component: TodoDetails,
  },
  {
    path: "/todo/:todoId/edit",
    component: TodoEdit,
  },
  {
    path: "/user",
    component: UserProfile,
  },
];
