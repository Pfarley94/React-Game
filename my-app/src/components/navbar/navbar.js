import React from "react";
import "./Navbar.css"

const Navbar = props =>(
    <nav>
        <h1 id="cur-sco">Current Score: {props.score}> </h1>
    </nav>
)

export default Navbar;