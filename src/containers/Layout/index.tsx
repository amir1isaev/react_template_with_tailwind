import React, { FC, ReactNode } from 'react'
import Main from 'components/simple/Main'
import Footer from 'components/simple/Footer'
import Header from 'components/simple/Header'
import Providers from '../Providers'
import 'styles/globals.css'

const Layout: FC<IProps> = p => {
	const { children } = p

	return (
		<Providers>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Providers>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
