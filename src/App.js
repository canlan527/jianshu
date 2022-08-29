import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store";
import Home from './pages/home';
import Detail from './pages/detail';
import Header from "./common/header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
