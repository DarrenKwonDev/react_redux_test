import { createStore } from "redux";

const Add = "Add";
const Delete = "Delete";

const reducer = (state = [], action) => {
  switch (action.type) {
    case Add:
      return [...state, { text: action.text, id: Date.now() }];
    case Delete:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return [...state];
  }
};

const store = createStore(reducer);

export default store;
