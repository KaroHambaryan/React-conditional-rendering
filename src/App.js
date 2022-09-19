import { useEffect, useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	const [deg, setDeg] = useState(0);

	useEffect(() => {
		console.log('worked...');
	})

	const chengeFirst = () => {
		setCount(count => count + 1)
	}
	const chengeSecond = () => {
		setDeg(deg => deg + 10)
	}
	return (
		<div >
			<h2>Current-{count}</h2>
			<h2>Current-{deg}</h2>
			<button onClick={chengeFirst}>chenge first</button>
			<button onClick={chengeSecond}>chenge second</button>
		</div>
	);

}

export default App;
