import React, { FC } from 'react'


const Home: FC<IProps> = () => {
	return <div className="bg-blue-200 p-2">
		<h1 className="text-3xl font-bold underline">
			Hello world!
		</h1>
	</div>
}

interface IProps { }
export default Home
