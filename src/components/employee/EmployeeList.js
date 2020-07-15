import React, { useState, useEffect } from "react"
import EmployeeCard from "./EmployeeCard"
import APIManager from "../../modules/APIManager"

const EmployeeList = (props) => {

    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return APIManager.getAll("employees").then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        })
    }

    useEffect(() => {
        getEmployees()
    }, [])

    const deleteEmployee = id => {
        APIManager.getWithDependency("employees", id, "animals")
        .then (results => {
            // Check if animals assigned to deleted employee have been reassigned
            if (results.animals.length > 0) {
                alert("Please reassign all of employee's animals before deleting.")
            } else {
                // If employee has no animals, then delete
                APIManager.delete("employees", id)
                .then(() => APIManager.getAll("employees").then(setEmployees))
            }
        })
    }

    return (
        <>
            <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push("/employees/new")}}>
                Hire Employee
            </button>
            </section>
            <div className="container-cards">
                {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} deleteEmployee={deleteEmployee} {...props} />)}
            </div>
        </>
    )
}

export default EmployeeList