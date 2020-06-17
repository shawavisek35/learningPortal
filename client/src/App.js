import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/main.js";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid" style={{width: "80%"}}>
        <Main />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
