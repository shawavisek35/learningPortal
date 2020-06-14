import React , { Component } from "react";
import {Switch , Route , Redirect } from "react-router-dom";
import Home from "../home/home.js";

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/home" component={()=> <Home />} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default Main;