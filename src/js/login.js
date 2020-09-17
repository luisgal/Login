import React from "react";
import {render} from "react-dom";

import Inicio from "./components/inicio";

import "../css/myCss.css";
import 'bootswatch/dist/litera/bootstrap.min.css';

import imagen from "../img/img-01.png";

import { BsArrowRight } from 'react-icons/bs';

class App extends React.Component {
    render() {
        return ( 
            <div class="container containerInicio">
                <div class="row">
                    <div class="col">
                        <img id="marginImgInit" src={imagen}></img>
                    </div>
                    <div class="col">
                        <Inicio />
                        <div class="row" id="marginAccount">
                        <a href="./createAccount.html" class="btn btn-outline-success btn-lg btn-block">Create your Account <BsArrowRight /></a>
                        </div>
                    </div>
                </div> 
            </div>
        )
    } 
}

render(
    <App/>,
    document.getElementById('app_login')
)