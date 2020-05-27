import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Todo = (props) => {
  console.log(props);
  function handleDel(e) {
    e.preventDefault();
    props.deleteToDo(props.id);
  }
  return (
    <li>
      <Link to={`${props.id}`}>{props.text}</Link>
      <button onClick={handleDel}>Del</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    deleteToDo: (id) => dispatch({ type: "Delete", id: ownProps.id }),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
