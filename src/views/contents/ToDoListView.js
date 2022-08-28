import React from "react";
import TodoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { List } from "rsuite";
//useSelector hook
const TodoListView = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <List bordered>
      {todos.map((todo, index) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </List>
  );
};

export default TodoListView;
//
