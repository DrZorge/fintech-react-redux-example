import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";
import { removeTodo, toggleTodo } from "./redux/todoActions";

import styles from "./TodoList.module.css";

const TodoList = props => (
  <ul className={styles.list}>
    {props.todos.map(item => (
      <TodoItem
        onToggle={props.toggleTodo}
        onRemove={props.removeTodo}
        key={item.id}
        {...item}
      />
    ))}
  </ul>
);

const mapStateToProps = todos => ({ todos });
const mapDispatchToProps = dispatch => ({
  removeTodo: payload => dispatch(removeTodo(payload)),
  toggleTodo: payload => dispatch(toggleTodo(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
