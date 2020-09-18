import React from "react";

import 'bootswatch/dist/litera/bootstrap.min.css';
import '../../css/myCss.css';

import { FaKey } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { RiUserAddFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

class Inicio extends React.Component {
    render() {
        return (
            <form action={this.props.crear} method="GET">
            <div class="container-sm">
                <div class="col">
                    <div class="form-group">
                        <label for="exampleNameUser"><RiUserAddFill /> User Name</label>
                        <input type="text" class="form-control rounded-pill border" id="exampleNameUser" placeholder="User Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1"><FaUserAlt /> Email address</label>
                        <input type="email" class="form-control rounded-pill border" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1"><FaKey /> Password</label>
                        <input type="password" class="form-control rounded-pill border" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button class="btn btn-outline-success btn-lg btn-block">Create New Account <BsArrowRight /></button>
                </div>
            </div>
            </form>
        )
    } 
}

export default Inicio;