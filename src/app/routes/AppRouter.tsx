import { FavoritesPage, HomePage } from 'pages'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/favorites',
		element: <FavoritesPage />,
	},
])

export const AppRouter = () => {
	return <RouterProvider router={router} />
}
