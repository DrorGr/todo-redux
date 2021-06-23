const initialState = {
  userName: "",
  fontClr: "#d2d9de",
  bcgClr: "#989898",
  activities: [{ txt: "Added a todo", at: 1523873242735 }],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_USER":
      console.log("action =", action);
      // const { userName, fontClr, bcgClr } = action;
      return { ...state, userName: action.userName };
    // return { ...state, action.user };
    // return { ...state, userName: userName, fontClr: fontClr, bcgClr: bcgClr };
    // return { ...state, {state.userName: action.userName, } };

    default:
      return state;
  }
}
