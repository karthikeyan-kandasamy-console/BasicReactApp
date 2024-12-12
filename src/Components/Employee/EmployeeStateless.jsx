// Function Component - rfc
import React from 'react'

export default function EmployeeStateless(props) {
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
                    {props.employee.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.contact.email}</td>
                            <td>{employee.contact.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div>
                {props.children}
            </div>

        </div>
    )
}

