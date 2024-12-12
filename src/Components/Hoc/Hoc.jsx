
import React, { Component } from 'react'

var HigherOrderComponent = (OriginalComponent) => {
    return class ModifiedComponent extends Component {

        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount(event) {
            this.setState({
                count: this.state.count + 1
            });
        }


        render() {
            return (
                <div>
                    <OriginalComponent count={this.state.count} incrementCount={()=>this.incrementCount()}></OriginalComponent>
                </div>
            )
        }
    }

}

export default HigherOrderComponent;