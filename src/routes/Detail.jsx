import React from "react";
import { connect } from "react-redux";

const Detail = (props) => {
  console.log(props.toDo);
  return (
    <>
      <div>Detail</div>
      <div>todo : {props.toDo?.text}</div>
      <div>createAt : {props.toDo?.id}</div>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  console.log(state);
  return { toDo: state.find((e) => e.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
