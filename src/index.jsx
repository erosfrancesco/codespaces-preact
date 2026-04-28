import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { AppStateProvider } from './hooks/useAppState.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<AppStateProvider>
				<Header />
				<main>
					<Router>
						<Route path="/" component={Home} />
						<Route default component={NotFound} />
					</Router>
				</main>
			</AppStateProvider>
		</LocationProvider>
	);
}

// @ts-ignore
render(<App />, document.getElementById('app'));
