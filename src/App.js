
import React from 'react';


class App extends React.Component {
	state = { num: 0 };

	countUp = () => {
		this.setState(current => {
			return {
				num: current.num + 1
			};
		})
	};
	render() {
	
		console.log("render",this.a);
		const { num } = this.state
		return (
			<div >
				<h1>number - {num}</h1>
				<button onClick={this.countUp}>UP</button>
			</div>
		);
	}
}

export default App;
