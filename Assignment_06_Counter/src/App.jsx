import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="app">
            <div className="counter">
                <h1>React Counter</h1>

                <h2>{count}</h2>

                <div className="buttons">
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;