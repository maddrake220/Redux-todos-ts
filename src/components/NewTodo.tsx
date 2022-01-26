import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/todosReducer";

const NewTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const onChangeHandler = useCallback((e) => {
    setTodo(e.target.value);
  }, []);
  const onKeyPressHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        dispatch(addTodo(todo));
      }
    },
    [dispatch, todo]
  );
  return (
    <NewTodoContainer>
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={onChangeHandler}
        value={todo}
        onKeyPress={onKeyPressHandler}
      />
    </NewTodoContainer>
  );
};

export default NewTodo;

const NewTodoContainer = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: 0 2px 2px -2px gray;
  input {
    font-size: 24px;
    padding: 16px 86px 16px 60px;
    :focus {
      outline: none;
    }
  }
`;
