import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav style={{ marginTop: "10px", fontWeight: "bold", padding: " 10px 30px" }}>
            <Link to="/Instructor" style={{ textDecoration: "none", padding: "0 15px" }} >Instructor</Link>
            <Link to="/Student" style={{ textDecoration: "none", padding: "0 15px" }} >Student</Link>
        </nav>
    )
}

export default Navigation;