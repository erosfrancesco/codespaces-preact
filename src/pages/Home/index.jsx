import { Counter } from '../../components/Counter';
import { useAppState } from '../../hooks/useAppState.jsx';
import './style.css';

export function Home() {
	const { settings } = useAppState();
	const availableColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

	return (<section className="w-full h-full flex flex-wrap gap-4 p-4">
		{Array.from({ length: settings.players }, (_, i) => (
			<div class="w-full h-full" style={{ backgroundColor: availableColors[i % availableColors.length] }}>
				<Counter key={i} />
			</div>
		))}
	</section>);
}
