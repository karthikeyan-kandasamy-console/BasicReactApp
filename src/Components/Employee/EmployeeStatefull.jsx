// Class Component - rce
import React, { Component } from 'react'

export class EmployeeStatefull extends Component {
    constructor(props) {
        console.log(props);

        super(props);

        this.state = {
            employee: this.props.employee
        }

        this.temp = {
            id: 0
        }
    }


    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employee.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.designation}</td>
                                <td>{data.department}</td>
                                <td>{data.salary}</td>
                                <td>{data.contact.email}</td>
                                <td>{data.contact.phone}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default EmployeeStatefull