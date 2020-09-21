import React from "react";
import {render} from "react-dom";

import Inicio from "./components/inicio";

import "../css/myCss.css";
import 'bootswatch/dist/litera/bootstrap.min.css';

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

        var myRequest = new Request('/Login_WAD/data/dataFront.json', myInit);
        
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
                            <img id="marginImgInit" src="https://portal.icsiiip.com/images/img-01.png"></img>
                        </div>
                        <div class="col">
                            <Inicio validar={this.state.data.links.validateUser} sesion={this.state.data.user.sesion}/>
                            <div class="row" id="marginAccount">
                            <a href={this.state.data.links.newAccount} class="btn btn-outline-success btn-lg btn-block">Create your Account <BsArrowRight /></a>
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