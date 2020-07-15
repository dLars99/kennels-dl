import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList"; 
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"
import LocationEditForm from "./location/LocationEditForm"
import AnimalForm from "./animal/AnimalForm"
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeForm from "./employee/EmployeeForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
import LocationForm from "./location/LocationForm"
import OwnerForm from "./owner/OwnerForm"
import OwnerEditForm from "./owner/OwnerEditForm"
import Login from "./auth/Login"
import SearchResults from "./search/SearchResults";

const ApplicationViews = (props) => {
    const hasUser = props.hasUser
    const setUser = props.setUser

    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                render={props => {
                return <Home />;
                }}
            />
            <Route
                path="/login"
                render={props => {
                    return <Login setUser={setUser} {...props} />
                }}
            />
            <Route
                exact path="/animals"
                render={props => {
                    if (hasUser) {
                        return <AnimalList {...props} />;
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                exact path="/animals/:animalId(\d+)"
                render={(props) => {
                    if (hasUser) {
                        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />          
                    } else {
                        return <Redirect to ="/login" />
                    }
                }}
            />
            <Route path="/animals/:animalId(\d+)/edit" render={props => {
                if (hasUser) {
                    return <AnimalEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
            <Route
                path="/animals/new"
                render={(props) => {
                    return <AnimalForm {...props} />
                }}
            />
            <Route
                exact path="/locations"
                render={props => {
                    return <LocationList {...props} />
                }}
            />
            <Route
                exact path="/locations/:locationId(\d+)"
                render={(props) => {
                    if (hasUser) {
                        return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route path="/locations/:locationId(\d+)/edit" render={props => {
                if (hasUser) {
                    return <LocationEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
            <Route
                path="/locations/new"
                render={(props) => {
                    return <LocationForm {...props} />
                }}
            />
            <Route
                exact path="/employees"
                render={props => {
                    if (hasUser) {    
                        return <EmployeeList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                path="/employees/new"
                render={(props) => {
                    return <EmployeeForm {...props} />
                }}
            />
            <Route
                path="/employees/:employeeId(\d+)/details"
                render={(props) => {
                    return <EmployeeWithAnimals {...props} />
                }}
            />
            <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                if (hasUser) {
                    return <EmployeeEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
                }}
            />
            <Route
                exact path="/owners"
                render={props => {
                    if (hasUser) {
                        return <OwnerList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                path="/owners/new"
                render={(props) => {
                    return <OwnerForm {...props} />
                }}
            />
            <Route path="/owners/:ownerId(\d+)/edit" render={props => {
                if (hasUser) {
                    return <OwnerEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
                }} 
            />
            <Route path="/search/:searchTerm" 
                render={props => {
                if (hasUser) {
                    return <SearchResults {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;