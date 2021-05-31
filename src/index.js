// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// theme
import { ThemeProvider } from 'styled-components'
import ThemeObject from './theme/index'

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(
    <ThemeProvider theme={ ThemeObject }>
    <App />
    </ThemeProvider>, 
    document.getElementById("root"));
