import React from 'react';

import 'bootswatch/dist/litera/bootstrap.min.css';

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

import ExamHead from './examHead';

class VerExamenes extends React.Component {
    render () {
        return (
            <div>
                <h2>Examenes</h2>
                <ExamHead probar={this.props.probar}/>
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
                                <td>
                                    <form action="/Login_WAD/verExamen">
                                        <input type="hidden" name={"examen" + examen.id} value={examen.id}></input>
                                        <button type="submit" class="btn btn-info"><FaArrowAltCircleRight /> {examen.id}</button>
                                    </form>
                                </td>
                                <td>{examen.name}</td>
                                <td>{examen.descripcion}</td>
                                <td>
                                    <form action="/Login_WAD/borrarExamen">
                                        <input type="hidden" name={"examen" + examen.id} value={examen.id}></input>
                                        <button type="submit" class="btn btn-danger">Eliminar <FaRegTrashAlt /></button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default VerExamenes;