import React from 'react'
import '../../main.css'
import Employee from '../Employee/Employee.js'

export default class EmployeeList extends React.Component {

    employee = this.props.attributes.map((attribute, index) => {
        return <Employee attributes={this.state.attributes}/>
    })

    render() {
        return (
            <article className="company-list">
                {this.employee}
            </article>
        )
    }
}