//npm packages
import React from "react";

//project files

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpan);
	}

	setSpan = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};

	render() {
		const { description, url } = this.props;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} src={url} alt={description} />
			</div>
		);
	}
}

export default ImageCard;
