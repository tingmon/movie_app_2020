import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
    return (<div className="nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Leader Profile</Link>
        <Link to="/notes">Notes</Link>
    </div>)
}

export default Navigation;