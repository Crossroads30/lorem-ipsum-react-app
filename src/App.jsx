import React, { useEffect, useState } from 'react'
import data from './data'
function App() {
	const [count, setCount] = useState(0)
	const [text, setText] = useState([])


	const handleSubmit = e => {
		e.preventDefault()
		let amount = parseInt(count) //we change type string(that comes from input value) to number
		// console.log(typeof amount)

		if (count <= 0) {
			amount = 1
		}
		if (count > data.length) {
			amount = data.length
		}
		setText(data.slice(0, amount))
	}

	console.log(data.length)
	return (
		<section className='section-center'>
			<h3>tired of boring lorem ipsum?</h3>
			<form className='lorem-form' onSubmit={handleSubmit}>
				<label htmlFor='amount'>paragraphs:</label>
				<input
					type='number'
					name='amount'
					id='amount'
					value={count}
					onChange={e => setCount(e.target.value)}
				/>
				<button type='submit' className='btn'>
					generate
				</button>
			</form>
			<article>
				{text.map((text, textIndex) => {
					return <p key={textIndex}>{text}</p>
				})}
			</article>
		</section>
	)
}

export default App
