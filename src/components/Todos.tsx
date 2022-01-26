import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Active from "./Active";
import All from "./All";
import Completed from "./Completed";
import Navigation from "./Navigation";
import NewTodo from "./NewTodo";

const Todos = () => {
  return (
    <TodosSection>
      <h1>todos</h1>
      <div className="todosForm">
        <header>
          <NewTodo />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/active" element={<Active />} />
            <Route path="/completed" element={<Completed />} />
          </Routes>
        </section>
        <footer>
          <nav>
            <Navigation />
          </nav>
        </footer>
      </div>
    </TodosSection>
  );
};
export default Todos;

const TodosSection = styled.section`
  position: absolute;
  width: 550px;
  height: 600px;
  left: 0;
  right: 0;
  margin: 0 auto;
  h1 {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: 100px;
    color: rgba(175, 47, 47, 0.15);
  }
  .todosForm {
    margin-top: 110px;
    box-shadow: 0 1px 1px 1px rgba(100, 97, 97, 0.15);
    header {
    }
  }
`;
