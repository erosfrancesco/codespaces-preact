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
							className="input"
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
							className="input"
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
						<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
							<label>
								Set all counters to:
							</label>
							<input
								className="input"
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
							/>
							<button
								className="button-primary"
								type="button"
								onClick={() => setAllCounters(settings.setAllValue)}
							>
								Set All
							</button>
							<button
								className="button-danger"
								type="button"
								onClick={resetCounters}
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