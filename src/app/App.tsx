import { MainProviders } from './providers'
import { AppRouter } from './routes'

function App() {
	return (
		<MainProviders>
			<AppRouter />
		</MainProviders>
	)
}

export default App
