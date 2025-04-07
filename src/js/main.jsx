import React from "react";
import ReactDOM from "react-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import '../styles/index.css';

// components
import Home from './components/Home';

ReactDOM.render(<Home />, document.querySelector("#app"),)
