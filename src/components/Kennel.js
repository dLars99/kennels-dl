import React from "react";
import "./Kennel.css";
import AnimalCard from "./animal/AnimalCard";
import LocationCard from "./location/LocationCard";
import OwnerCard from "./owner/OwnerCard"
import EmployeeCard from "./employee/EmployeeCard"

const Kennel = () => {
    return (
        <div>
            <div>
                <h2>
                    Student Kennels
                    <br />
                    <small>Loving care when you're not there.</small>
                </h2>
                <LocationCard />
            </div>
            <div className = "container-cards" >
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
            </div>
            <div className = "container-cards" >
                <OwnerCard />
            </div>
            <div className = "container-cards" >
                <EmployeeCard />
            </div>
        </div>
    );
};

export default Kennel;