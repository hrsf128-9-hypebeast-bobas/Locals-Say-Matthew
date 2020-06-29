import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app/app";
import './index.scss';

ReactDOM.render(
    <div style={{ paddingTop: '50px'}}>
        <App/>
    </div>,
    document.getElementById("app")
);