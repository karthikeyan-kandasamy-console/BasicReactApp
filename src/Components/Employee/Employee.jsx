import React from 'react'
import EmployeeStateless from './EmployeeStateless'
import EmployeeStatefull from './EmployeeStatefull'
import Employeedata from '../../Resource/property'

export default function Employee() {
    
    return (
        <div>
            <h1>Function Component</h1>
            <EmployeeStateless employee={Employeedata}>
                <h2>Nested Element from StateLess</h2>
            </EmployeeStateless>

            <h1>Class Component</h1>
            <EmployeeStatefull employee={Employeedata}>
                <h2>Nested Element from StateFull</h2>
            </EmployeeStatefull>
        </div>
    )
}
