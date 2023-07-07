import React, { useState } from "react";
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
                    <a  href="/" className="nav-logo">
                        Ankit Tyagi  
                    </a>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a
                                
                                href="/"
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                
                                href=""
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                
                                href=""
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                
                                href=""
                                // activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact
                            </a>
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
