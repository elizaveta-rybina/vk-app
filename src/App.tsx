import { MainProviders } from './app/providers'
import { AppRouter } from './app/routes'

function App() {
	return (
		<MainProviders>
			<AppRouter />
		</MainProviders>
	)
}

export default App
