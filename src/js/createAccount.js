import React from "react";
import {render} from "react-dom";

import NewAccount from "./components/newAccount";

import "../css/myCss.css";
import 'bootswatch/dist/litera/bootstrap.min.css';

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

        var myRequest = new Request('/Login_WAD/data/links.json', myInit);
        
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
                            <NewAccount crear={this.state.data.createUser}/>
                        </div>
                    </div> 
                </div>
           )
        }
    } 
}

render(
    <App/>,
    document.getElementById('app_createAccount')
)