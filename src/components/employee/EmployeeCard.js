import React from "react";

const EmployeeCard = () => {
    return ( 
        <div className="card">
            <div className="card-content" >
                <h3>
                    Employee of the Month: <span className="card-employeename">Allen Span</span>
                </h3>
                <p>Position: Mop Wielder</p>
            </div>
        </div>
    );
};

export default EmployeeCard;