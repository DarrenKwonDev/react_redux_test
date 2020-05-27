import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import Todo from "../Components/ToDo";

const Home = (props) => {
  const [text, setText] = useState("");
  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(text);
    setText("");
  }
  //   console.log(props.toDos);
  return (
    <Fragment>
      <h1>To Do</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <input type="submit" value="add" />
      </form>
      <ul>
        {props.toDos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </Fragment>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => dispatch({ type: "Add", text }),
    deleteToDo: (id) => dispatch({ type: "Delete", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
