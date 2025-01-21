import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClientProvider
import { MainProviders } from './providers'
import { AppRouter } from './routes'

const queryClient = new QueryClient();

function App() {
  return (
    <MainProviders>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </MainProviders>
  )
}

export default App
