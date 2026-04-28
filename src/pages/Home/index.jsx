import { Counter } from '../../components/Counter';
import { useAppState } from '../../hooks/useAppState.jsx';
import './style.css';

export function Home() {
	const { settings } = useAppState();
	const playerCount = Math.max(1, Math.min(settings.players, 5));


	return (
		<section>
			{playerCount === 5 && (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<PlayerCard index={0} orientation="top" />
				<div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
					<PlayerCard index={1} orientation="left" />
					<PlayerCard index={2} orientation="right" />
				</div>
				<div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
					<PlayerCard index={3} orientation="left" />
					<PlayerCard index={4} orientation="right" />
				</div>
			</div>
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
				<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<PlayerCard index={0} orientation="top" />
						<PlayerCard index={1} orientation="bottom" />
					</div>
					<PlayerCard index={2} orientation="left" />
				</div>
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

/**
 * @param {{ orientation?: 'top' | 'bottom' | 'left' | 'right'; index: number }} props
 */
function PlayerCard({ index, orientation = "top" }) {
	const availableColors = ['crimson', 'green', 'blue', 'gold', 'teal'];
	const color = availableColors[index % availableColors.length];

	return (
		<div className="player-card" style={{ backgroundColor: color }}>
			<Counter
				orientation={orientation}
				index={index} />
		</div>
	);
}