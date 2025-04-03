// import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useLocationStore from "../stores/useLocationStore";

const Photos = () => {
	// const { id } = useParams();
	const locationId = useLocationStore((state) => state.locationId);
	const { isLoading, isError, data } = useFetch(`location/${locationId}/photos`, {}, {});

	data && console.log(data);

	return (
		<>
			<section>
				{isLoading && <p>Loading...</p>}
				{isError && <p>There was an error</p>}
				{data && (
					<div>
						{data.data.map((photo) => (
							<article>
								<figure>
									<img src={photo.images.medium.url} alt='' />
									<figcaption>{photo.caption}</figcaption>
								</figure>
								<p>Published: {photo.published_date}</p>
							</article>
						))}
					</div>
				)}
			</section>
		</>
	);
};
export default Photos;
