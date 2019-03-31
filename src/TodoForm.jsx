import React, { Component } from "react";

import styles from "./TodoForm.module.css";

import { connect } from "react-redux";
import { addTodo } from "./redux/todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.todoInput) {
      return;
    }

    this.props.addTodo({
      id: +new Date(),
      title: this.state.todoInput,
      done: false
    });
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.todoForm}>
        <div className={styles.formRow}>
          <div className={styles.inputWrapper}>
            <input
              name="todoInput"
              onChange={this.handleChange}
              className={styles.todoInput}
              type="text"
              value={this.state.inputValue}
              placeholder="Что сделать?"
            />
          </div>
          <button type="submit" className={styles.todoButton}>
            Добавить
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: payload => dispatch(addTodo(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
