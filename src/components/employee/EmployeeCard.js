import React from "react";

const EmployeeCard = (props) => {

    // Default image if no image is in the database
    const image = !props.employee.image ? "employee-default.jpg" : props.employee.image

    return ( 
        <div className="card">
            <div className="card-content" >
                <picture>
                    <img className="card-image" src={require(`../employee/images/${image}`)} alt="Employee" />
                </picture>

                <h3>
                    Name: <span className="card-employeename">{props.employee.name}</span>
                </h3>
                <p>Position: {props.employee.position}</p>
                <button type="button" onClick={() => { props.history.push(`/employees/${props.employee.id}/details`)}}>Details</button>
                <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
                <button type="button"onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>Edit</button>
            </div>
        </div>
    );
};

export default EmployeeCard;