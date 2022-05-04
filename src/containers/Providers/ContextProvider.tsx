import React, { ReactNode, FC } from 'react'
import { CommonContext } from 'core/context'

const ContextProvider: FC<IProps> = ({ children }) => {
	const hello = 'hello context'
	return <CommonContext.Provider value={{ hello }}>{children}</CommonContext.Provider>
}

interface IProps {
	children: ReactNode
}

export default ContextProvider
