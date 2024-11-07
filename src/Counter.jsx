import { useState } from "react";

function Counter() {
    const theState = useState(0);
    let Counter = theState[0];
    const updateCounter = theState[1];


    const handleClick = () => {
        updateCounter(Counter + 1);

    }


    return (
        <div className="flex items-center gap-4">
            <button className="btn" onClick={handleClick}>-</button>
            <p className="text-4xl font-bold">{Counter}</p>
            <button className="btn" onClick={handleClick}>+</button>
        </div>
    )
}

export default Counter;