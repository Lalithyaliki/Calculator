import './liststyle.css';

import React, { useState } from 'react'


function List() {

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
        setinput((prev) => (prev === "0" ? btn.toString() : prev + btn ));

    }

    return (
        <div className="calci">
            <div className="data">
                <h2>Calculator</h2>
                <input type="text" placeholder="0" value={input} id="text"></input>
                <div className="button">
                    {buttons.map((btn, index) => (
                        <button key={index} onClick={() => handle(btn)}>{btn}</button>
                    ))}
                </div>
            </div>
        </div >

    )
}

export default List;