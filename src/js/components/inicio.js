import React from "react";

import 'bootswatch/dist/litera/bootstrap.min.css';
import '../../css/myCss.css'
import { BsFillLockFill } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';

class Inicio extends React.Component {
    render() {
        return (
            <form action="#">
            <div class="container-sm">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address <FaUserAlt /></label>
                        <input type="email" class="form-control rounded-pill border" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password <FaKey /></label>
                        <input type="password" class="form-control rounded-pill border" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-success btn-lg">Sing in <BsFillLockFill /></button>
                </div>
            </div>
            </form>
        )
    } 
}

export default Inicio;