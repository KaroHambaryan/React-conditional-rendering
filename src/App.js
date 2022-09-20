import Playlist from "./Components/Playlist";
import Song from "./Components/Song";

import './App.css';
function App() {

	return (
		<div>
			<Playlist>
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
			</Playlist>
		</div>
	);

}

export default App;
