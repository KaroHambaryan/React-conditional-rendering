import { useEffect, useState } from "react";

function App() {
	const [num, setNum] = useState(0);

	useEffect(() => {
		console.log('redy');
	},[])

	const countUp = () => {
		setNum(num => ++num)
	}

	const countDown = () => {
		setNum(num => --num)
	}
	
	return (
		<div >
				<h1>number-({num})</h1>
			<button onClick={countUp}>UP</button>
			<button onClick={countDown}>Down</button>
			</div>
		);
	
}

export default App;
