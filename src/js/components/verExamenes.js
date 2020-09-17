import React from 'react';

import 'bootswatch/dist/litera/bootstrap.min.css';

import { FaArrowAltCircleRight } from 'react-icons/fa';

import ExamHead from './examHead';

class VerExamenes extends React.Component {
    render () {
        return (
            <div>
                <h2>Examenes</h2>
                <ExamHead probar={this.props.probar} probar={this.props.probar}/>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Examen</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.examenes.map(examen => (
                            <tr>
                                <td><a href={examen.link}><FaArrowAltCircleRight /> {examen.id}</a></td>
                                <td>{examen.name}</td>
                                <td>{examen.descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default VerExamenes;