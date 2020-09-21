import React from 'react';

import 'bootswatch/dist/litera/bootstrap.min.css';
import '../../css/myCss.css';

import Card from './presentCard';
import data from './dataCard.json';

class LobyBody extends React.Component {
    render () {
        return (
            <div>
                <h2>Bienvenido de nuevo {this.props.name} </h2>
                <p class="lead"><strong><em>¿Que deseas hacer el día de hoy?</em></strong></p>
                <div class="row">
                    <div class="col"><Card header={data.pregunta.header} title={data.pregunta.title} body={data.pregunta.body} link={this.props.links.preguntas}/></div>
                    <div class="col"><Card header={data.examen.header} title={data.examen.title} body={data.examen.body} link={this.props.links.examenes}/></div>
                    <div class="col"><Card header={data.probar.header} title={data.probar.title} body={data.probar.body} link={this.props.links.examenes}/></div>
                </div>
            </div>
        )
    }
}

export default LobyBody;