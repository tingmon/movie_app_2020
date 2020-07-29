import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return <div className="navigation">
        <Link to="/">Home</Link>
        <Link to={{
            pathname: "/about",
            state:{
                fromNavgation: true
            }
        }}>About</Link>
        <br></br>
    </div>
}

export default Navigation;