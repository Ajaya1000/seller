import React from "react";
import Routes from "./routes";
import reducers from "./redux/reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
// var store = createStore(reducers, applyMiddleware(thunk, logger));
function App() {
  return (<Routes/>);
}

export default App;
