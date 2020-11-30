import React, { FC } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Top from "./pages/Top";
import Header from "./pages/Header";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Top />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
