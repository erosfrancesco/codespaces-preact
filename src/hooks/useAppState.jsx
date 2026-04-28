import { createContext } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';

/**
 * @typedef {{ players: number; darkMode: boolean; counters: number[]; setAllValue: number }} Settings
 * @typedef {{
 *   settingsOpen: boolean;
 *   setSettingsOpen: import('preact/hooks').Dispatch<import('preact/hooks').StateUpdater<boolean>>;
 *   settings: Settings;
 *   setSettings: import('preact/hooks').Dispatch<import('preact/hooks').StateUpdater<Settings>>;
 *   resetCounters: () => void;
 *   setAllCounters: (value: number) => void;
 * }} AppStateContextValue
 */

const AppStateContext = createContext(/** @type {AppStateContextValue | null} */(null));

const STORAGE_KEY = 'codespaces-preact-settings';

function getInitialSettings() {
	if (typeof window === 'undefined') {
		return { players: 2, darkMode: false, counters: [0, 0, 0, 0, 0], setAllValue: 0 };
	}

	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored) {
			const parsed = JSON.parse(stored);
			// Ensure counters array exists and has correct length
			if (!parsed.counters || !Array.isArray(parsed.counters)) {
				parsed.counters = [0, 0, 0, 0, 0];
			}
			if (parsed.counters.length !== 5) {
				parsed.counters = [0, 0, 0, 0, 0];
			}
			return parsed;
		}
	} catch (error) {
		console.warn('Failed to read app settings from storage:', error);
	}

	return { players: 2, darkMode: false, counters: [0, 0, 0, 0, 0], setAllValue: 0 };
}

/** @param {{ children: import('preact').ComponentChildren }} props */
export function AppStateProvider({ children }) {
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [settings, setSettings] = useState(getInitialSettings);

	const resetCounters = () => {
		setSettings((/** @type {any} */ prev) => ({
			...prev,
			counters: [0, 0, 0, 0, 0]
		}));
	};

	const setAllCounters = (/** @type {any} */ value) => {
		setSettings((/** @type {{ counters: any[]; }} */ prev) => ({
			...prev,
			counters: prev.counters.map(() => value)
		}));
	};

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
				resetCounters,
				setAllCounters,
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
