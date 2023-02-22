import "./navbar.css"
import { Link } from "react-router-dom"

import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Armour</span>
        </Link>
        {/* <span className="logo"></span> */}
        <div className="navItems">
          {user ? 
          <Link to="/profile" style={{ color: "inherit", textDecoration: "none" }}><button className="navButton">{user.username}</button></Link>
        : 
        <><Link to="/registration" style={{ color: "inherit", textDecoration: "none" }}><button className="navButton">Register</button></Link>
        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}><button className="navButton">Login</button></Link></>}
          
        </div>
      </div>
    </div>
  )
}

export default Navbar