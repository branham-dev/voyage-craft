import useFetch from "../hooks/useFetch";
import useLocationStore from "../stores/useLocationStore";

const Reviews = () => {
	const locationId = useLocationStore((state) => state.locationId);

	const { isLoading, isError, data } = useFetch(`location/${locationId}/reviews`);

	data && console.log(data);

	return (
		<section>
			{isLoading && <p>Loading...</p>}
			{isError && <p>There was an error.</p>}
			{data &&
				data.data.map((review, index) => (
					<article key={index}>
						<div>
							<figure>
								<img src={review.user.avatar.thumbnail} alt='' />
							</figure>
							<p>{review.user.username}</p>
							<p>{review.user?.user_location?.name}</p>
							<h2>{review.title}</h2>
							<p>{review.text}</p>
							<p>{review.travel_date}</p>
							<p>{review.trip_type}</p>
							<p>{review.rating}</p>
						</div>
					</article>
				))}
		</section>
	);
};
export default Reviews;
