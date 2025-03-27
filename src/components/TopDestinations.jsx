import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";

const fetchDetails = async (id) => {
	const { data } = await axios.get(`http://localhost:5000/api/tripadvisor/location/${id}/details`);
	return data;
};

const fetchPhotos = async (id) => {
	const { data } = await axios.get(`http://localhost:5000/api/tripadvisor/location/${id}/photos`);
	return data;
};

const TopDestinations = () => {
	const featuredIds = ["13320787"];

	const [imageIndex, setImageIndex] = useState(2);

	const queries =
		useQueries({
			queries: featuredIds.flatMap((id) => [
				{
					queryKey: ["detail", id],
					queryFn: () => fetchDetails(id),
					staleTime: Infinity,
					cacheTime: 1000 * 60 * 60 * 24, // Keep cache for 24 hours
					refetchOnMount: false,
				},
				{
					queryKey: ["photo", id],
					queryFn: () => fetchPhotos(id),
					staleTime: Infinity,
					cacheTime: 1000 * 60 * 60 * 24, // Keep cache for 24 hours
					refetchOnMount: false,
				},
			]),
		}) || [];

	if (!Array.isArray(queries) || queries.length === 0) {
		return <p>Loading...</p>;
	}

	const groupedData = featuredIds.map((id, index) => {
		const detailsQuery = queries[index * 2]; // Every even index is details
		const photosQuery = queries[index * 2 + 1]; // Every odd index is photos

		return {
			id,
			details: detailsQuery?.data || null,
			photos: photosQuery?.data || null,
			isLoading: detailsQuery?.isLoading || photosQuery?.isLoading,
			error: detailsQuery?.error || photosQuery?.error,
		};
	});

	console.log(groupedData);

	return (
		<section className='mt-24 cus-w'>
			{groupedData.map(({ id, details, photos, isLoading, error }) => (
				<article key={id} className=' border border-platinum rounded-t-xl overflow-hidden'>
					{isLoading && <p>Loading {id}...</p>}
					{error && (
						<p>
							Error loading {id}: {error.message}
						</p>
					)}
					{photos && (
						<img
							src={photos.data[imageIndex].images.original.url}
							alt={`Photo of ${photos.data[imageIndex].caption}`}
						/>
					)}
					{details && <h2>{details.name}</h2>}
				</article>
			))}
		</section>
	);
};
export default TopDestinations;
