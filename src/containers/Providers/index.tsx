import React, { FC, ReactNode } from 'react'
import ContextProvider from './ContextProvider'
import ReduxProvider from './ReduxProvider'
import RouterProvider from './RouterProvider'


const Providers: FC<IProps> = p => {
	const { children } = p
	return (
		<RouterProvider>
			<ReduxProvider>
				<ContextProvider>{children} </ContextProvider>
			</ReduxProvider>
		</RouterProvider>
	)
}

interface IProps {
	children: ReactNode
}
export default Providers
