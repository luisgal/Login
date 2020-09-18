import React from "react";

import 'bootswatch/dist/litera/bootstrap.min.css';
import '../../css/myCss.css'
import { GrLogin } from 'react-icons/gr';
import { FaKey } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
class Inicio extends React.Component {
    render() {
        const message = "";
        if(this.props.sesion == "wrong user"){
            message = "Contraseña y/o usuario incorrectos."
        }
        
        return (
            <form action={this.props.validar} method="GET">
            <div class="container-sm">
                <div class="col">
                    <div class="form-group">
                        <label for="email"><FaUserAlt /> Email address</label>
                        <input type="email" class="form-control rounded-pill border" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div> 
                    <div class="form-group">
                        <label for="password"><FaKey /> Password</label>
                        <input type="password" class="form-control rounded-pill border" id="password" placeholder="Password" name="password"/>
                    </div>
                    <p class="text-danger">{message}</p>
                    <button type="submit" class="btn btn-success btn-lg">Sing in <GrLogin /></button>
                </div>
            </div>
            </form>
        )
    } 
}

export default Inicio;