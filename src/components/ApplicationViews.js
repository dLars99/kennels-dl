import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";
import OwnerCard from "./owner/OwnerCard"; 

const ApplicationViews = () => {
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
            path="/animals"
            render={props => {
            return <AnimalCard />;
            }}
        />
        <Route
            path="/locations"
            render={props => {
                return <LocationCard />
            }}
        />
        <Route
            path="/employees"
            render={props => {
                return <EmployeeCard />
            }}
        />
        <Route
            path="/owners"
            render={props => {
                return <OwnerCard />
            }}
        />
    </React.Fragment>
  );
};

export default ApplicationViews;