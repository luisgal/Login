import React from "react";

import 'bootswatch/dist/litera/bootstrap.min.css';

import { BiHighlight } from 'react-icons/bi';
import { GrLogout } from 'react-icons/gr';

class NavBar extends React.Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href={this.props.links.loby}> <BiHighlight /> WAD ESCOM Exams JS </a>

                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href={this.props.links.examenes}>Examenes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={this.props.links.preguntas}>Preguntas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={this.props.links.examenes}>Probar examen</a>
                        </li>
                    </ul>
                </div>

                <a href={this.props.links.close} class="btn btn-danger my-2 my-sm-0">Cerrar sesion <GrLogout /></a>
                
            </nav>
        )
    }
}

export default NavBar;