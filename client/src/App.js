import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewEvent from "./pages/NewEvent/NewEvent";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/new" component={NewEvent} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
