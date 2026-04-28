import { useAppState } from '../hooks/useAppState.jsx';
import Dialog from './Dialog';

export function Header() {
	const { settingsOpen, setSettingsOpen, settings, setSettings } = useAppState();

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
				</Dialog>
			)}
		</>
	);
}