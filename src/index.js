import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import store from "./redux/store";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Список дел</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
