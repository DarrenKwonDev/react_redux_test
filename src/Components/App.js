import React from "react";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/:id" exact component={Detail}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
