import React , { Component } from "react";
import "./home.css";

class Home extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center home-h1">Boiler Plate for MERN Project</h1>
                <p className="text-center home-p">Go to client/src/components/home folder to edit the view</p>
            </div>
        )
    }
}

export default Home;