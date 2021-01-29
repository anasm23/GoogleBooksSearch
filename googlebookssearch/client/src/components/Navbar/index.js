import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (
        <nav className="bar">
            <div className="container"></div>
                <Link className="navbar-brand" to="/">Google Books Search</Link>
                    
                    <button className="nav-item1">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}> 
                            Search
                        </Link>
                    </button> 
                  
                    <button className="nav-item2">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Library</Link>
                    </button>
        </nav>

    );
}

export default Navbar;