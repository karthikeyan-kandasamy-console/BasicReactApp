import React, { Component } from 'react'

export class ChildLifecycle extends Component {

    constructor(props) {

        console.log("Child Constructor Execution");

        super(props)

        this.state = {
            count: 10
        }
    }


    render() {
        console.log("Child render Execution");
        return (
            <div style={{'border':'2px solid red'}}>
                <h1>Child Lifecycle Component</h1>

                <h2>Props Count{this.props.count} </h2>

            </div>
        )
    }

    componentDidMount() {
        console.log('Component DidMount');
    }


   
    componentWillUnmount() {
        console.log('Component will unmount!');
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate");
        
    }

    // getDerivedStateFromProps(mount,props){
    //     console.log("getDerivedStateFromProps");
        
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Component shouldComponentUpdate');
        // return true;
        return nextProps.count !== this.props.count;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component updated!');
    }


}

export default ChildLifecycle