import React from 'react';
import finder from './app-finder.png';
import mail from './app-mail.png';
import preferences from './app-preferences.png';
import safari from './app-safari.png';
import terminal from './app-terminal.png';
import trash from './app-trash.png';
import './Dock.css';

const Dock = (props) => {
    const { setTopWindow } = props;

    return (
        <div className="dock">
            <ul>
                <li>
                    <img className="appIcon" src={finder} alt="finder" />
                </li>
                <li>
                    <img className="appIcon" src={mail} alt="mail"/>
                </li>
                <li>
                    <img className="appIcon" src={preferences} alt="preferences" />
                </li>
                <li>
                    <img className="appIcon" src={safari} alt="safari" onClick={() => setTopWindow("Safari")} />
                </li>
                <li>
                    <img className="appIcon" src={terminal} alt="terminal" onClick={() => setTopWindow("Shell")} />
                </li>
                <li>
                    <img className="appIcon" src={trash} alt="trash" />
                </li>
            </ul>
        </div>
    )
}   

export default Dock;