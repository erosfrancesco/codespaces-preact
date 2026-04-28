import { render } from 'preact';
import { LocationProvider } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { AppStateProvider } from './hooks/useAppState.jsx';

import './style.css';

export function App() {
	return (
		<LocationProvider>
			<AppStateProvider>
				<Header />
				<main>
					<Home />
				</main>
			</AppStateProvider>
		</LocationProvider>
	);
}

// @ts-ignore
render(<App />, document.getElementById('app'));
