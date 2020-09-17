import React from 'react';

import 'bootswatch/dist/litera/bootstrap.min.css';
import '../../css/myCss.css';

import { BsArrowRight } from 'react-icons/bs';

class Card extends React.Component {
    render () {
        return (
            <div class="card border-success mb-3 card-w">
                <div class="card-header">{this.props.header}</div>
                <div class="card-body">
                    <h4 class="card-title"><a href={this.props.link}>{this.props.title}</a></h4>
                    <p class="card-text">{this.props.body}</p>
                </div>
            </div>
        )
    }
}

export default Card;