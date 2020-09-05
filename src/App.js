import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Singlepost from "./Singlepost";
import Home from "./Home";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/eventsblogs/:id">
            <Singlepost />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
