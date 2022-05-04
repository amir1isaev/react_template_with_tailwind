import { FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import { browserRoutes } from 'core/routes'
import Post from 'pages/Post'

const AppRoutes: FC<IProps> = () => {
	return (
		<Routes>
			<Route path={browserRoutes.homeBrowserRoutes.index()} element={<Home />} />
			<Route path={browserRoutes.postBrowserRoutes.index()} element={<Post />} />
		</Routes>
	)
}

export default AppRoutes
interface IProps { }
