import { useAppState } from '../hooks/useAppState.jsx';
import Dialog from './Dialog';

import './Header.css';

export function Header() {
	const { settingsOpen, setSettingsOpen, settings, setSettings, resetCounters, setAllCounters } = useAppState();

	return (
		<>
			<header>
				<button
					className="fab-settings"
					type="button"
					aria-label="Open settings"
					onClick={() => setSettingsOpen(true)}
				>
					⚙️
				</button>
			</header>

			{settingsOpen && (
				<Dialog setOpen={setSettingsOpen}>
					<p>Adjust your app preferences below.</p>
					<label>
						Players:
						<input
							type="number"
							step="1"
							min="1"
							max="10"
							value={settings.players}
							onInput={(event) =>
								setSettings({
									...settings,
									players: Number(event.currentTarget.value) || 1,
								})
							}
						/>
					</label>
					<label>
						<input
							type="checkbox"
							checked={settings.darkMode}
							onChange={(event) =>
								setSettings({
									...settings,
									darkMode: event.currentTarget.checked,
								})
							}
						/>
						Dark mode
					</label>
					<div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e8e8ef' }}>
						<h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem' }}>Counter Controls</h3>
						<label>
							Set all counters to:
							<input
								type="number"
								step="1"
								min="-999"
								max="999"
								value={settings.setAllValue}
								onInput={(event) =>
									setSettings({
										...settings,
										setAllValue: Number(event.currentTarget.value) || 0,
									})
								}
								style={{ marginLeft: '0.5rem', width: '80px' }}
							/>
							<button
								type="button"
								onClick={() => setAllCounters(settings.setAllValue)}
								style={{ marginLeft: '0.5rem', padding: '0.25rem 0.75rem' }}
							>
								Set All
							</button>
						</label>
						<div style={{ marginTop: '1rem' }}>
							<button
								type="button"
								onClick={resetCounters}
								style={{ padding: '0.5rem 1rem', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
							>
								Reset All Counters
							</button>
						</div>
					</div>
				</Dialog>
			)}
		</>
	);
}