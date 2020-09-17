import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

class ExamHead extends React.Component {
    render () {
        if(this.props.probar){
            return(
                <div>
                    <p class="lead"><strong><em>Acontinuacion se muestran todos los examenes registradas en nuestra plataforma con los que puedes interactuar. Selecciona el examen que deseas probar. </em></strong></p>
                </div>
            )
        } else {
            return(
                <div>
                    <p class="lead"><strong><em>Acontinuacion se muestran todos los examenes registradas en nuestra plataforma con los que puedes interactuar. Selecciona el examen al cual deseas ingresar o puedes crear un nuevo examen. </em></strong></p>
                    <a href="./newExam.html" class="btn btn-outline-success btn-lg btn-block">Crear examen <BsArrowRight /></a>
                </div>
            )
        }
    }
}

export default ExamHead;