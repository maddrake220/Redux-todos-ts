import { useSelector } from "react-redux";
import styled from "styled-components";
import { TodosState, TodosType } from "../Types";

const TodoList = () => {
  const todos = useSelector<TodosState, TodosType[]>((state) => state.todos);
  console.log(todos);
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.ul`
  position: relative;
`;
