import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';

/**
 * @typedef {{ players: number; darkMode: boolean }} Settings
 * @typedef {{
 *   settingsOpen: boolean;
 *   setSettingsOpen: import('preact/hooks').Dispatch<import('preact/hooks').StateUpdater<boolean>>;
 *   settings: Settings;
 *   setSettings: import('preact/hooks').Dispatch<import('preact/hooks').StateUpdater<Settings>>;
 * }} AppStateContextValue
 */

const AppStateContext = createContext(/** @type {AppStateContextValue | null} */ (null));

const STORAGE_KEY = 'codespaces-preact-settings';

function getInitialSettings() {
	if (typeof window === 'undefined') {
		return { players: 2, darkMode: false };
	}

	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored) {
			return JSON.parse(stored);
		}
	} catch (error) {
		console.warn('Failed to read app settings from storage:', error);
	}

	return { players: 2, darkMode: false };
}

/** @param {{ children: import('preact').ComponentChildren }} props */
export function AppStateProvider({ children }) {
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [settings, setSettings] = useState(getInitialSettings);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		document.body.classList.toggle('dark-mode', settings.darkMode);
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
	}, [settings]);

	return (
		<AppStateContext.Provider
			value={{
				settingsOpen,
				setSettingsOpen,
				settings,
				setSettings,
			}}
		>
			{children}
		</AppStateContext.Provider>
	);
}

export function useAppState() {
	const context = useContext(AppStateContext);
	if (!context) {
		throw new Error('useAppState must be used within AppStateProvider');
	}

	return context;
}
