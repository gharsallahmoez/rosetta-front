import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route } from "react-router-dom";
import AddCollection from "./components/Project/addCollection";
import {Provider} from 'react-redux';
import store from "./store";
import UpdateCollection from "./components/Project/updateCollection";
import CollectionBoard from "./components/projectBoard/CollectionBoard"
import AddShoe from "./components/projectBoard/ProjectTasks/AddShoe";
import UpdateShoe from "./components/projectBoard/ProjectTasks/UpdateShoe";

class App extends Component {
    render() {
    return (
    <Provider store={store}>
    <Router>
    <div className="App">

    <Header />
    <Route exact path={"/dashboard"}  component={Dashboard}/>
    <Route exact path={"/addCollection"}  component={AddCollection}/>
    <Route exact path={"/updateCollection/:id"}  component={UpdateCollection}/>
    <Route exact path={"/collectionBoard/:id"}  component={CollectionBoard}/>
    <Route exact path={"/addShoe/:id"}  component={AddShoe}/>
    <Route exact path={"/updateShoe/:backlog_id/:pt_id"}  component={UpdateShoe}/>
    </div>
    </Router>
    </Provider>
    );
  }
}

export default App;
