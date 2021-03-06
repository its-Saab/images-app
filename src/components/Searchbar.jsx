import React from "react";

class Searchbar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={({ target: { value } }) =>
								this.setState({ term: value })
							}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Searchbar;
