import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle';

export class LifeCycle extends Component {

    constructor(props) {
        super(props)
        console.log("Parent Constructor Execution");

        this.state = {
            condition:true,
            count:0
        }

    }

    toggleChild(){
        this.setState({
            condition:!this.state.condition,
        })
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }


    render() {
        console.log("Parent render Execution");

        return (
            <div >
                <h1>Parent Lifecycle Component</h1>

                <h1>{this.state.count}</h1>


                <button onClick={()=>this.increment()}>Increment</button>

                <br />

                <button onClick={()=>this.toggleChild()}>Render Child</button>

                {this.state.condition?<ChildLifecycle count={this.state.count} ></ChildLifecycle>:null}
            </div>
        )
    }



    

    


    

    

}

export default LifeCycle