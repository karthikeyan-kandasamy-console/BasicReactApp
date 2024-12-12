import React, { Component } from 'react'

import HigherOrderComponent from '../Hoc/Hoc';

export class MouseEnter extends Component {

    render() {
        return (
            <div>
                <label onMouseEnter={() => this.props.incrementCount()}> Count : {this.props.count}</label>
            </div>
        )
    }
}

export default HigherOrderComponent(MouseEnter);