import Song from "./Components/Song";

import './App.css';
function App() {
	
	return (
		<div className="App">
			<h1>Playlist</h1>
			<Song
				title="I have Nothing"
				singer="Whitnney Houston"
				duration="3"
			/>
			<Song
				title="Image"
				singer="John Lenon"
				duration="5.3"
			/>
			<Song
				title="Yesterday"
				singer="The Beatels"
				duration="4.2"
			/>
		</div>
	);

}

export default App;
