import React from "react";
import {render} from "react-dom";

import 'bootswatch/dist/litera/bootstrap.min.css';

import { BiHighlight } from 'react-icons/bi';
import { GrLogout } from 'react-icons/gr';

class NavBar extends React.Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"> <BiHighlight /> WAD ESCOM Exams JS </a>

                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Examenes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Preguntas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Probar examen</a>
                        </li>
                    </ul>
                </div>
                <form action="/Login_WAD/close" class="form-inline my-2 my-lg-0">
                    <button class="btn btn-danger my-2 my-sm-0" type="submit">Cerrar sesion <GrLogout /></button>
                </form>
            </nav>
        )
    }
}

export default NavBar;