import { useState } from 'preact/hooks';

export function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div class="counter">
			<p>Counter: {count}</p>
			<div class="counter-buttons">
				<button onClick={() => setCount(count - 1)}>-</button>
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>
		</div>
	);
}
