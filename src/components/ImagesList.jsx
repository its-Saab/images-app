//npm packages

//projects files
import "../style/ImageList.css"
import ImageCard from "./ImageCard";

export const ImagesList = ({ list }) => {
	const images = list.map(({id, description, urls:{regular}}) => {
		return <ImageCard key={id} url={regular} description={description} />;
	});

	return <div className="image-list">{images}</div>;
};
