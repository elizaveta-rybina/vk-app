import Header from 'shared/Header'
import { headerMenu } from 'shared/model/menu'
import { MainProviders } from './providers'
import { AppRouter } from './routes'

function App() {
	return (
		<MainProviders>
			<Header items={headerMenu} />
			<AppRouter />
		</MainProviders>
	)
}

export default App
