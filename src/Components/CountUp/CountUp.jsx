import React, { Component } from 'react'
import Hoc from '../Hoc/Hoc';

export class CountUp extends Component {

    render() {
        return (
            <div>
                <h2>Count Increment</h2>
                <h2>{this.props.count}</h2>
                <button onClick={()=>this.props.incrementCount()}>Increment</button>
            </div>
        )
    }
}

export default Hoc(CountUp);
