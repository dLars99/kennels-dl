import React, { useState, useEffect } from "react"
import APIManager from "../../modules/APIManager"
import { firstLetterCase } from "../../modules/Helper"
import "./EmployeeForm.css"

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", position: "", image: "", locationId: 0 });
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: firstLetterCase(employee.name),
      position: firstLetterCase(employee.position),
      locationId: parseInt(employee.locationId),
      image: employee.image
    };

    APIManager.update("employees", editedEmployee)
      .then(() => props.history.push("/employees"))
  }

  useEffect(() => {
    APIManager.get("employees", props.match.params.employeeId)
      .then(employee => {
        APIManager.getAll("locations")
        .then (locations => {
          setLocations(locations)
          setEmployee(employee);
          setIsLoading(false);
        })
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="position"
              value={employee.position}
            />
            <label htmlFor="position">Position</label>
            <select className="form-control" id="locationId" value={employee.locationId} onChange={handleFieldChange}>
              {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
            </select>
            <label htmlFor="locationId">Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EmployeeEditForm