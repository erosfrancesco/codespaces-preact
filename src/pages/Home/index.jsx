import { Counter } from '../../components/Counter';
import { useAppState } from '../../hooks/useAppState.jsx';
import './style.css';

export function Home() {
	const { settings } = useAppState();

	return (
		<div class="home">
			<section>
				{Array.from({ length: settings.players }, (_, i) => (
					<Counter key={i} />
				))}
			</section>
		</div>
	);
}
