export const addTodo = payload => ({
  type: "ADD_TODO",
  payload
});

export const removeTodo = payload => ({
  type: "REMOVE_TODO",
  payload
});

export const toggleTodo = payload => ({
  type: "TOGGLE_TODO",
  payload
});
