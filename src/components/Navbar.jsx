import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css"


function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }


    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink  to="/" className="nav-logo">
                        <span id="nav-span">Ankit</span>.  
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                
                                to="/project"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/about"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Education
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/contact"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
