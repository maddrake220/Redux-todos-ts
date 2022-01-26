import { v4 as uuidv4 } from "uuid";
import { createActions, handleActions } from "redux-actions";
import { TodosState } from "../Types";

const initialState: TodosState = {
  todos: [],
};

const prefix = "redux-todos-ts/todos";

export const { addTodo } = createActions("ADD_TODO", {
  prefix,
});

const reducer = handleActions<TodosState, string>(
  {
    ADD_TODO: (state, action) => ({
      todos: [
        ...state.todos,
        { id: uuidv4(), text: action.payload, completed: false },
      ],
    }),
  },
  initialState,
  { prefix }
);

export default reducer;
