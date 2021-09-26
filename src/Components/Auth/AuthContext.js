import React, { createContext, useReducer } from "react";

const AuthContext = createContext(null);
//  using local storage instead of using session storage because it is a common practice for token storing
const token = localStorage.getItem("token");
const refreshToken = localStorage.getItem("refreshToken");
const email = localStorage.getItem("email");
const initialState = {
  token: token ? token : null,
  refreshToken: refreshToken ? refreshToken : null,
  email: email ? email : null,
};

const authReducer = (authState, action) => {
  // actions for setting, getting, and removing token
  switch (action.type) {
    case "set":
      localStorage.setItem("token", action.token);
      localStorage.setItem("refreshToken", action.refreshToken);
      localStorage.setItem("email", action.email);
      return {
        token: action.token,
        refreshToken: action.refreshToken,
        email: action.email,
      };
    case "get":
      return { ...authState };
    case "del":
      localStorage.clear();
      return { token: null, refreshToken: null, email: null };
    default:
      break;
  }
};

const init = (initialState) => {
  return { ...initialState };
};

const AuthContextProvider = (props) => {
  // for the third argument check the link below for more info
  // https://reactjs.org/docs/hooks-reference.html#lazy-initialization
  const [authState, dispatch] = useReducer(authReducer, initialState, init);
  // returning state with valid token and refresh token, and dispatch for actions
  const value = { authState, dispatch };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
