import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <form onSubmit={props.handleTodoSubmit}>
    <input
      type="text"
      autoFocus
      value={props.currentTodo}
      onChange={props.handleNewTodoChange}
      className="new-todo"
      placeholder="What needs to be done?"
    />
  </form>
);
