import React, { useState, useEffect } from "react"
import OwnerCard from "./OwnerCard"
import APIManager from "../../modules/APIManager"

const OwnerList = (props) => {

    const [owners, setOwners] = useState([])

    const getOwners = () => {
        return APIManager.getAll("owners").then(ownersFromAPI => {
            setOwners(ownersFromAPI)
        })
    }

    useEffect(() => {
        getOwners()
    }, [])

    const deleteOwner = id => {
        APIManager.delete("owners", id)
        .then(() => APIManager.getAll("owners").then(setOwners))
    }

    return (
        <>
            <section>
                <button type="button"
                    className="btn"
                    onClick={() => {props.history.push("/owners/new")}}>
                    Register Owner
                </button>
            </section>
            <div className="container-cards">
                {owners.map(owner => <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner} {...props} />)}
            </div>
        </>
    )
}

export default OwnerList