import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
                <div className="navItem underlined"><a>01. About</a></div>
                <div className="slash">//</div>
                <div className="navItem underlined"><a>02. Experience</a></div>
                <div className="slash">//</div>
                <div className="navItem underlined"><a>03. Projects</a></div>  
                <div className="slash">//</div>
                <div className="navItem underlined"><a>04. Contact</a></div> 
        </div>
    )
}   

export default Navigation;