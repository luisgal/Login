import React from "react";
import {render} from "react-dom";

import NewAccount from "./components/newAccount";

import "../css/myCss.css";
import 'bootswatch/dist/litera/bootstrap.min.css';

import imagen from "../img/img-01.png";

class App extends React.Component {
    render() {
        return ( 
            <div class="container containerInicio">
                <div class="row">
                    <div class="col">
                        <img id="marginImgInit" src={imagen}></img>
                    </div>
                    <div class="col">
                        <NewAccount />
                    </div>
                </div> 
            </div>
        )
    } 
}

render(
    <App/>,
    document.getElementById('app_createAccount')
)