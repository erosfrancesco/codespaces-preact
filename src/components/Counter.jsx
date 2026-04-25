import { useState } from 'preact/hooks';
import './Counter.css';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div class="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
