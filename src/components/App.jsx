//npm packages
import React from "react";

//project files
import Searchbar from "./Searchbar";
import unsplash from "../api/Unsplash";
import { ImagesList } from "./ImagesList";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		try {
			await unsplash
				.get(`search/photos`, {
					params: { query: term },
				})
				.then(({ data: { results } }) => this.setState({ images: results }));
		} catch (e) {
			console.error(e);
		}
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<Searchbar onSearchSubmit={this.onSearchSubmit} />
				Found {this.state.images.length} Images
        <ImagesList list = {this.state.images} />
			</div>
		);
	}
}

export default App;
