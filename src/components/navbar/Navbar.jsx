import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">List</Link>
            <Link to="/ajout">Ajouter</Link>
        </div>
    )
}


export default Navbar;