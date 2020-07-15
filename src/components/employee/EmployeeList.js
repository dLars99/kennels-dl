import React, { useState, useEffect } from "react"
import EmployeeCard from "./EmployeeCard"
import EmployeeManager from "../../modules/EmployeeManager"
import AnimalManager from "../../modules/AnimalManager"

const EmployeeList = (props) => {

    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return EmployeeManager.getAll().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        })
    }

    useEffect(() => {
        getEmployees()
    }, [])

    const deleteEmployee = id => {
        EmployeeManager.getWithAnimals(id)
        .then (results => {
            // Check if animals assigned to deleted employee have been reassigned
            if (results.animals.length > 0) {
                alert("Please reassign all of employee's animals before deleting.")
            } else {
                // If employee has no animals, then delete
                EmployeeManager.delete(id)
                .then(() => EmployeeManager.getAll().then(setEmployees))
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