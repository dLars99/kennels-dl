import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (evt) => {
        if (evt.key === "Enter") {
            props.history.push("/search")
        }
    }

    const handleFieldChange = evt => {
        const stateToChange = { ...searchTerm };
        stateToChange[evt.target.id] = evt.target.value;
        setSearchTerm(stateToChange);
      };

    const handleLogout = () => {
        props.clearUser()
        props.history.push("/")
    }

  return (
    <header>
        <h1 className="site-title">
            Student Kennels
            <br />
            <small>Loving care when you're not there.</small>
        </h1>
        <nav>
            <ul className="container">
            <li>
                <NavLink className="nav-link" activeClassName="selected" exact to="/">
                Home
                </NavLink>
            </li>
            {props.hasUser
            ? <li>
                <NavLink className="nav-link" activeClassName="selected" to="/animals">
                Animals
                </NavLink>
            </li>
            : null}
            <li>
                <NavLink className="nav-link" activeClassName="selected" to="/locations">
                Locations
                </NavLink>
            </li>
            {props.hasUser
            ? <li>
                <NavLink className="nav=link" activeClassName="selected" to="/employees">
                Employees
                </NavLink>
            </li>
            : null}
            {props.hasUser
            ? <li>
                <NavLink className="nav-link" activeClassName="selected" to="/owners">
                Owners
                </NavLink>
            </li>
            : null}
            {props.hasUser
            ? <li>
                <input type="text" id="search" onChange={handleFieldChange} onKeyPress={handleSearch} placeholder="search" />
            </li>
            : null}
            {props.hasUser
            ? <li>
                <span className="nav-link" onClick={handleLogout}>
                    Logout
                </span>
            </li>
            : <li>
                <NavLink className="nav-link" activeClassName="selected" to="/login">
                    Login
                </NavLink>
            </li>
            }
            </ul>
        </nav>
    </header>
  );
};

export default withRouter(NavBar);