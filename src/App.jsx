import React, { useState } from 'react'
import data from './data'
function App() {
	const [count, setCount] = useState(0)
	const [text, setText] = useState([])

	return (
		<section className='section-center'>
			<h3>tired of boring lorem ipsum?</h3>
			<form className='lorem-form'>
				<label htmlFor='amount'>paragraph:</label>
				<input
					type='number'
					name='amount'
					id='amount'
					value={text}
					onChange={e => setCount(e.target.value)}
				/>
				<button type='submit' className='btn'>
					generate
				</button>
			</form>
			<p className='result'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis fuga nisi veniam dolor a quisquam quod illo? Aperiam voluptatem illo tenetur sint, deleniti id, facilis, consequuntur ex maiores omnis dolorem?</p>
			<p className='result'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis fuga nisi veniam dolor a quisquam quod illo? Aperiam voluptatem illo tenetur sint, deleniti id, facilis, consequuntur ex maiores omnis dolorem?</p>
		</section>
	)
}

export default App
