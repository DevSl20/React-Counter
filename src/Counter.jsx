import { useState } from "react";

function Counter({ start = 0 }) {
    // const theState = useState(0);
    let [Counter, setCounter] = useState(start);
    // const updateCounter = theState[1];


    const handleClick = (type) => {
        if (type === "minus") {
            setCounter(Counter - 1);

            return
        }
        setCounter(Counter + 1)

    };


    return (
        <div className="flex items-center gap-4">
            <button className="btn" onClick={handleClick("minus")}>-</button>
            <p className="text-4xl font-bold">{Counter}</p>
            <button className="btn red" onClick={handleClick()}>+</button>
        </div>
    );
}

export default Counter;