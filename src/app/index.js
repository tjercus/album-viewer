import React from "react";
import { Route, Link } from "react-router-dom";
import List from "../list/index";
import Edit from "../edit/index";

const Index = () => (
  <div>
    <header>
      <Link to="/">List</Link> |
      <Link to="/edit">Edit</Link>
    </header>

    <main>
      <Route exact path="/" component={List} />
      <Route exact path="/edit" component={Edit} />
    </main>
  </div>
);

export default Index;
