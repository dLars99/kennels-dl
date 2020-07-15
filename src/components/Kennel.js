import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";

const Kennel = () => {
  const isAuthenticated = () => {
    return (sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null) ? true : false
  }

  // const isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  const clearUser = () => {
    sessionStorage.clear()
    localStorage.clear()
    setHasUser(isAuthenticated())
  }

  const [hasUser, setHasUser] = useState(isAuthenticated())

  const setUser = (remember, user) => {
    if (remember) {
      localStorage.setItem(
          "credentials",
          JSON.stringify(user))
      } else {
        sessionStorage.setItem("credentials", JSON.stringify(user))
      }
      
    setHasUser(isAuthenticated())
  }

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;