import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { Input, InputGroup } from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";
import "rsuite/styles/index.less";
import "rsuite/dist/rsuite.min.css";
//Add button clicked => dispatch the todo action
const AddToDo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (value) {
      dispatch(
        addTodo({
          title: value,
        })
      );
    }
    console.log(value);
  };

  return (
    <>
      <InputGroup>
        <Input
          onChange={(value) => {
            setValue(value);
          }}
        />
        <InputGroup.Button onClick={onSubmit}>
          <PlusIcon />
        </InputGroup.Button>
      </InputGroup>
    </>
  );
};

export default AddToDo;
/*

 <form onSubmit={onSubmit} className="form-inline mt-3 mb-3 d-flex">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add a todo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>

        <button type="submit" className="btn btn-secondary mb-3">
          Add
        </button>
      </form>

*/
