const Playlist = (props) => {
	return (
		<div className="playlist">
			<h1>Playlist</h1>
			{props.children}
			<button>Download all</button>
			<button>Play all</button>
		</div>
	);
};

export default Playlist;