import { createStore } from "redux";

import todoReducer from "./todoReducer";

const preloadedState = [
  { id: 1, title: "Выпить кофе", done: false },
  { id: 2, title: "Изучить HTML, CSS", done: false },
  { id: 3, title: "Изучить JS", done: false }
];

export default createStore(todoReducer, preloadedState);
