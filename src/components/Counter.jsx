import { useState } from 'preact/hooks';
import './Counter.css';

/**
 * @param {{ orientation?: 'top' | 'bottom' | 'left' | 'right' }} props
 */
export function Counter({ orientation = 'top' }) {
    const [count, setCount] = useState(0);

    const rotationMap = {
        top: '0deg',
        left: '90deg',
        bottom: '180deg',
        right: '270deg'
    };

    const rotation = rotationMap[orientation] || '0deg';

    return (
        <div class="counter" style={{ transform: `rotate(${rotation})` }}>
            <button onClick={() => setCount(count - 1)}>-</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
