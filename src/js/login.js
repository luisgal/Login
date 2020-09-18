import React from "react";
import {render} from "react-dom";

import Inicio from "./components/inicio";

import "../css/myCss.css";
import 'bootswatch/dist/litera/bootstrap.min.css';

import imagen from "../img/img-01.png";

import { BsArrowRight } from 'react-icons/bs';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            data : []          
        };
    }
    
    extractData = () => {
        var myHeaders = new Headers();

        var myInit = { method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default' };

        var myRequest = new Request('/data/links.json', myInit);
        
        // I will use fake api from jsonplaceholder website
        // this return 100 data 
        fetch(myRequest)
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    data : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }
    
    render() {
        const {error, isLoaded, data} = this.state;

        this.extractData();

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return ( 
                <div class="container containerInicio">
                    <div class="row">
                        <div class="col">
                            <img id="marginImgInit" src={imagen}></img>
                        </div>
                        <div class="col">
                            <Inicio validar={this.state.data.host + this.state.data.validateUser} />
                            <div class="row" id="marginAccount">
                            <a href={this.state.data.host + this.state.data.newAccount} class="btn btn-outline-success btn-lg btn-block">Create your Account <BsArrowRight /></a>
                            </div>
                        </div>
                    </div> 
                </div>
            )
        }
    } 
}

render(
    <App/>,
    document.getElementById('app_login')
)