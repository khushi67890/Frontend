import "./App.css";
import React from "react";
import ListUserComponent from "./components/ListUserComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import ViewUserComponent from "./components/ViewUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListUserComponent}></Route>
            <Route path="/users" exact component={ListUserComponent}></Route>
            <Route component={CreateUserComponent} path="/add-user/:id"></Route>
            <Route
              component={UpdateUserComponent}
              path="/update-user/:id"
            ></Route>
            <Route component={ViewUserComponent} path="/view-user/:id"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
