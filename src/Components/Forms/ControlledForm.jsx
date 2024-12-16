import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field: {
                name: '',
                email: '',
                age: ''
            }
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        var data = this.state.field;
        Object.assign(data,{[name]:value});

        console.log(data);
        

        this.setState({
            feild:data
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', this.state.field);
    };

    render() {
        return (
            <div>
                <h1>Controlled Forms</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text" name="name" value={this.state.field.name} onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email" name="email" value={this.state.field.email} onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input type="number" name="age" value={this.state.field.age} onChange={this.handleChange} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm