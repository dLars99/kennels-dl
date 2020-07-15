import React, { useState, useEffect } from 'react';
import APIManager from '../../modules/APIManager';
import { firstLetterCase } from "../../modules/Helper"
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "", position: "", locationId: "" });
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = firstLetterCase(evt.target.value);
    setEmployee(stateToChange);
  };

  useEffect(() => {
    APIManager.getAll("locations")
    .then(locations => {
      setLocations(locations)
      setIsLoading(false)
    })
  }, [])

  /*  Local method for validation, set loadingStatus, create Employee object, invoke the APIManager post method, 
  and redirect to the full Employee list*/
  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.name === "" || employee.position === "") {
      window.alert("Please input an employee name and position");
    } else {
      setIsLoading(true);
      const newEmployee = {
        name: employee.name,
        position: employee.position,
        locationId: parseInt(employee.locationId)
      }
      // Create the employee and redirect user to employee list
      APIManager.post("employees", newEmployee)
        .then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="position"
              placeholder="Position"
            />
            <label htmlFor="position">Position</label>
            <select className="form-control" id="locationId" value={employee.locationId} onChange={handleFieldChange}>
              {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
            </select>
            <label htmlFor="locationId">Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm