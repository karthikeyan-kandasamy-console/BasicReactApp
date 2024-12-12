import React, { Component } from 'react'

export class LifeCycle extends Component {

    constructor(props) {
        super(props)

        console.log("Constructor Execution");

    }

    static getDerivedStateFromProps(nextProps, nextState) {

        console.log("Render Execution");

        // if (nextProps.value !== nextState.value) {
        //     return { value: nextProps.value };
        // }
        // return null;
    }


    render() {
        console.log("Render Execution");
        return (
            <div>Mounting</div>
        )
    }

    componentDidMount() {
        console.log('Component componentDidMount!');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Component shouldComponentUpdate');
        return nextState.count !== this.state.count;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // You can return values that will be passed to componentDidUpdate()
        console.log('Component getSnapshotBeforeUpdate');
        return null;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component updated!');
    }

    componentWillUnmount() {
        console.log('Component will unmount!');
    }

}

export default LifeCycle