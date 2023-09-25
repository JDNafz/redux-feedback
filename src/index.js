import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// form Responses
const inputs = (
  state = {
    feeling: -1,
    understanding: -1,
    support: -1,
    comments: "",
  },
  action
) => {
  if (action.type === "SET_FEELING") {
    return (state = { ...state, feeling: action.payload });
  }
  if (action.type === "SET_UNDERSTANDING") {
    return (state = { ...state, understanding: action.payload });
  }
  if (action.type === "SET_SUPPORT") {
    return (state = { ...state, support: action.payload });
  }
  if (action.type === "SET_COMMENTS") {
    return (state = { ...state, comments: action.payload });
  }
  if (action.type === "RESET") {
    return {
      feeling: -1,
      understanding: -1,
      support: -1,
      comments: "",
    };
  }

  return state;
}; //end reducer feeling

// Store
const storeInstance = createStore(
  combineReducers({
    inputs,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
