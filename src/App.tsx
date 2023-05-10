import React, { useState, useEffect } from "react";

function App() {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    });

    function handleMouseMove() {
        setClickCount(clickCount + 1);
    }

    return (
        <div>
            <p>Click count: {clickCount}</p>
        </div>
    );
}

export default App;
