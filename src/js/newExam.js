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

        var myRequest = new Request('/data/dataFront.json', myInit);
        
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
                        <h2>Examen: </h2>
                        <input class="form-control" type="text" placeholder="Nombre del examen" id="examName"></input>
                        
                        <h2>Descripcion: </h2>
                        <textarea class="form-control" id="examDescripcion" placeholder="Descripcion del examen" rows="3"></textarea>
                        
                        <p class="lead"><strong><em>Acontinuacion se muestran todos las preguntas registradas en nuestra plataforma con las que puedes interactuar. Selecciona todas aquellas que deseas agregar a este examen. </em></strong></p>
                        <p class="lead"><strong><em><span class="text-danger">Importante,</span> las preguntas deben estar anteriormente creadas para poder agregarlas. </em></strong></p>
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Seleccionar</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.data.preguntas.map(pregunta => (
                                    <tr>
                                        <td>
                                            <Form.Group as={Row} controlId={pregunta.id}>
                                                <Form.Check type="checkbox"/>
                                                <Form.Label>{pregunta.id} - Agregar</Form.Label>
                                            </Form.Group>
                                        </td>
                                        <td>{pregunta.name}</td>
                                        <td>{pregunta.descripcion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button class="btn btn-outline-success btn-lg btn-block">Crear Examen</button>
                    </div>
                    </Form>
                </div>
            );
        }
    } 
}

render(
    <App/>,
    document.getElementById('app_newExam')
)