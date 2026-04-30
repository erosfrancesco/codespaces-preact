import { useAppState } from '../hooks/useAppState.jsx';
import './Counter.css';

/**
 * @param {{ orientation?: 'top' | 'bottom' | 'left' | 'right'; index: number }} props
 */
export function Counter({ orientation = 'top', index }) {
    const { settings, setSettings } = useAppState();
    const count = settings.counters[index] || 0;

    const updateCount = (/** @type {number} */ newCount) => {
        setSettings((prev) => ({
            ...prev,
            counters: prev.counters.map((c, i) => i === index ? newCount : c)
        }));
    };

    const rotationMap = {
        top: '0deg',
        left: '90deg',
        bottom: '180deg',
        right: '270deg'
    };

    const rotation = rotationMap[orientation] || '0deg';

    return (
        <div class="counter" style={{ transform: `rotate(${rotation})` }}>
            <button onClick={() => updateCount(count - 1)} style={{ paddingBottom: '0.4rem' }}>-</button>
            <h1>{count}</h1>
            <button onClick={() => updateCount(count + 1)} style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>+</button>
        </div>
    );
}
