import { userService } from "../../services/user-service.js";

export function onUserLogin(userName, fontClr, bcgClr) {
  //   console.log("user will log in =", userName, fontClr, bcgClr);
  const user = { userName, fontClr, bcgClr };
  return (dispatch) => {
    return userService
      .save(user)
      .then((user) => {
        const action = {
          type: "SAVE_USER",
          user,
        };
        dispatch(action);
      })
      .catch((err) => {
        dispatch({ type: "USER_ERR", err });
      });
  };
}
