import { FavoritesPage, HomePage } from 'pages'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Container from 'shared/Container'

const router = createHashRouter([
	{
		path: '/',
		element: <Container />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/favorites',
				element: <FavoritesPage />,
			},
		],
	},
])

export const AppRouter = () => {
	return <RouterProvider router={router} />
}
