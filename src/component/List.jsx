import '../styles/liststyle.css';
import React, { useState } from 'react'


function List() {

    const [theme, setTheme] = useState("dark");
    const [input, setinput] = useState("0");

    const buttons = ["Ac", "del", "%", "/", 7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "#", 0, ".", "="]

    const handle = (btn) => {
        if (btn === "Ac") {
            setinput("0");
            return;

        }
        if (btn === "del") {
            setinput((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
            return;
        }

        if (btn === "=") {
            try {
                setinput(eval(input).toString());
            }
            catch {
                setinput("error");
            }
            return;
        }
        setinput((prev) => (prev === "0" ? btn.toString() : prev + btn));
    }

    return (
        <div className={`project ${theme}`}>
            <div className='nav'>
                <a className="global-text" href="#">
                    <i className="bi bi-calculator"></i>
                    Calculator
                </a>
                <button className="theme" onClick={() => setTheme((prev) => (prev === "dark"?"light":"dark"))}>
                    {theme === "dark" ? <i className="bi bi-moon"></i> :<i className="bi bi-sun"></i> }
                </button>
            </div>
            <div className="calci">
                <div className="data">
                    <h2 className='global-text'>Calculator</h2>
                    <input type="text" placeholder="0" value={input} id="text"></input>
                    <div className="button">
                        {buttons.map((btn, index) => (
                            <button key={index} onClick={() => handle(btn)}>{btn}</button>
                        ))}
                    </div>
                </div>
            </div >
        </div>

    )
}

export default List;