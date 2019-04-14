import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter(item => item.id !== action.payload.id);

    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, done: !item.done };
        }

        return item;
      });

    default:
      return state;
  }
};
