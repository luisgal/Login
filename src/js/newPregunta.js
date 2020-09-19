import React from "react";
import {render} from "react-dom";
import {Form,Col,Row} from 'react-bootstrap';

import 'bootswatch/dist/litera/bootstrap.min.css';
import "../css/myCss.css";

import NavBar from './components/navBar';

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
            return(
                <div>
                    <NavBar />
                    <Form action="#">
                    <div class="container container-B">
                        <h2>Pregunta: </h2>
                        <input class="form-control" type="text" placeholder="Nombre de la pregunta" id="examName"></input>
                        
                        <h2>Descripcion: </h2>
                        <textarea class="form-control" id="examDescripcion" placeholder="Descripcion de lo que se debera hacer en esta pregunta" rows="3"></textarea>

                        <button class="btn btn-outline-success btn-lg btn-block">Crear Pregunta</button>
                    </div>
                    </Form>
                </div>
            );
        }
    } 
}

render(
    <App/>,
    document.getElementById('app_newPregunta')
)