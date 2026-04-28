import { useState } from 'preact/hooks';
import Dialog from './Dialog';

export function Header() {
	const [settingsOpen, setSettingsOpen] = useState(false);

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

			{settingsOpen && <Dialog setOpen={setSettingsOpen}>
				<p>Adjust your app preferences below.</p>
				<label>
					<input type="number" step="1" min="1" max="5" placeholder="Players" className="w-full min-w-10" />
				</label>
			</Dialog>}
		</>
	);
}