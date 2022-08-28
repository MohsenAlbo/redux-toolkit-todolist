import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete, deleteTodo } from "../../redux/todoSlice";
import { List, Checkbox, Button } from "rsuite";
import { Grid, Row, Col } from "rsuite";
const ToDoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };
  console.log("");
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <>
      <List hover>
        {" "}
        <List.Item>
          <Row className="show-grid">
            <Col xs={8}>
              <Checkbox checked={completed} id={id} />
            </Col>
            <Col xs={8}> {title}</Col>
            <Col xs={8}>
              <Button onClick={handleDeleteClick} color="red" appearance="link">
                Delete
              </Button>
            </Col>
          </Row>{" "}
        </List.Item>
      </List>
    </>
  );
};

export default ToDoItem;
