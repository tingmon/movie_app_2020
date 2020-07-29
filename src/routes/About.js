import React from 'react';
import "./Home.css";

function About(props){
    console.log(props)
    return <div className="about_container">
        <span>
            "Water flows down but, Money flows up. So pump down the money from the top!" 
        </span><br></br>
        <span>Thomas Julianus, 2020</span>
    </div>
}

export default About;