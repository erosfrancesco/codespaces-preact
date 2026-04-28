import { Counter } from '../../components/Counter';
import { useAppState } from '../../hooks/useAppState.jsx';
import './style.css';

export function Home() {
	const { settings } = useAppState();
	const playerCount = Math.max(1, Math.min(settings.players, 5));


	return (
		<section>
			{playerCount === 5 && (<>
				<PlayerCard index={0} orientation="top" />
				<PlayerCard index={1} orientation="top" />
				<PlayerCard index={2} orientation="top" />
				<PlayerCard index={3} orientation="bottom" />
				<PlayerCard index={4} orientation="bottom" />
			</>
			)}
			{playerCount === 4 && (
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<PlayerCard index={0} orientation="top" />
					<div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
						<PlayerCard index={1} orientation="left" />
						<PlayerCard index={2} orientation="right" />
					</div>
					<PlayerCard index={3} orientation="bottom" />
				</div>
			)}
			{playerCount === 3 && (
				<>
					<PlayerCard index={0} orientation="top" />
					<PlayerCard index={1} orientation="top" />
					<PlayerCard index={2} orientation="bottom" />
				</>
			)}
			{playerCount === 2 && (
				<>
					<PlayerCard index={0} orientation="top" />
					<PlayerCard index={1} orientation="top" />
				</>
			)}
			{playerCount === 1 && (
				<PlayerCard index={0} orientation="top" />
			)}
		</section>
	);
}

// @ts-ignore
function PlayerCard({ index, orientation = "top" }) {
	const availableColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
	const color = availableColors[index % availableColors.length];

	return (
		<div className="player-card" style={{ backgroundColor: color }}>
			<Counter
				// @ts-ignore
				orientation={orientation} />
		</div>
	);
}