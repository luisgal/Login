import React from "react";
import {render} from "react-dom";

import 'bootswatch/dist/litera/bootstrap.min.css';
import "../css/myCss.css";

import NavBar from './components/navBar';
import LobyBody from './components/lobyBody';

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

        var myRequest = new Request('/Login_WAD/datos', myInit);
        
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
            return(
                <div>
                    <NavBar links={this.state.data.links}/>
                    <div class="container container-B">
                    <LobyBody name={this.state.data.user.name} links={this.state.data.links} /> 
                    </div>
                </div>
            );
        }
    } 
}

render(
    <App/>,
    document.getElementById('app_loby')
)