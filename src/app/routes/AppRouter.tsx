import { FavoritesPage, HomePage } from 'pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Container from 'shared/Container'

const router = createBrowserRouter(
	[
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
	],
	{
		basename: '/vk-app',
	}
)

export const AppRouter = () => {
	return <RouterProvider router={router} />
}
