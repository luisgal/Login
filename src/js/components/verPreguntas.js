import React from 'react';

import 'bootswatch/dist/litera/bootstrap.min.css';

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

class VerPreguntas extends React.Component {
    render () {
        return (
            <div>
                <h2>Preguntas</h2>
                <p class="lead"><strong><em>Acontinuacion se muestran todas las preguntas registradas en nuestra plataforma con las que puedes interactuar. Selecciona la pregunta a la cual deseas ingresar o puedes crear una nueva pregunta. </em></strong></p>
                <a href="#" class="btn btn-outline-success btn-lg btn-block">Crear pregunta <BsArrowRight /></a>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Pregunta</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.preguntas.map(pregunta => (
                            <tr>
                                <td><a href={pregunta.link}><FaArrowAltCircleRight /> {pregunta.id}</a></td>
                                <td>{pregunta.name}</td>
                                <td>{pregunta.descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default VerPreguntas;