import React, { Component } from 'react'

export class UnControlledForm extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', this.nameRef.current.value);
        console.log('Email:', this.emailRef.current.value);
    };

    render() {
        return (
            <div>
                <h1>Un Controlled Forms</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input ref={this.nameRef} type="text" />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input ref={this.emailRef} type="email" />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UnControlledForm