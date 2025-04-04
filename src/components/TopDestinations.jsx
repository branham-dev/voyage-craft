import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import Button from "./Button";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const fetchDetails = async (id) => {
	const { data } = await axios.get(`http://localhost:5000/api/tripadvisor/location/${id}/details`);
	return data;
};

const fetchPhotos = async (id) => {
	const { data } = await axios.get(`http://localhost:5000/api/tripadvisor/location/${id}/photos`);
	return data;
};

const TopDestinations = () => {
	const featuredIds = ["4091780", "13320787", "10187804", "2225731", "571999", "93559"];

	const [imageIndex, setImageIndex] = useState(0);

	const navigate = useNavigate();

	const navToSignIn = () => {
		// console.log("Here!");
		navigate("/sign-in");
	};

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

	// console.log(groupedData);

	const truncateText = (text, maxLength) => {
		return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
	};

	return (
		<section className='mt-24 cus-w grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3'>
			{groupedData.map(({ id, details, photos, isLoading, error }) => (
				<article
					key={id}
					className=' border border-platinum rounded-t-xl overflow-hidden relative pb-6 max-w-[600px] h-full flex flex-col justify-stretch mx-auto hover:shadow-2xl transition-all duration-700'>
					<div>
						{isLoading && <p>Loading {id}...</p>}
						{error && (
							<p>
								Error loading {id}: {error.message}
							</p>
						)}
						{photos && (
							<img
								src={photos?.data[imageIndex].images?.original?.url}
								alt={`Photo of ${photos?.data[imageIndex].caption}`}
							/>
						)}
					</div>
					{details && (
						<div className='px-4 flex flex-col grow'>
							<div>
								<span className='block absolute top-2 left-2 bg-secondary font-inter text-off-white font-bold py-0.5 px-4 rounded-full text-sm'>
									Featured
								</span>
								<span className='absolute top-2 right-2 bg-white p-1 rounded-full'>
									<FiHeart className='text-red-500 text-[1.25rem]' />
								</span>
								<h3 className='text-[1.35rem] text-deep-blue font-semibold font-playfair mt-4 mb-1.5'>
									{details.name}
								</h3>
								<div className='flex justify-between text-brand items-center mb-2'>
									<div className='flex items-center gap-1'>
										<IoMdStar className='text-secondary text-[1.35rem]' />
										<p className='font-inter text-gray-400 text-[1.15rem]'>
											{details.rating} ({details.num_reviews})
										</p>
									</div>
									<span className='block font-inter text-[0.85rem]/5 font-semibold bg-teal-100 px-2 rounded-full tracking-[0.06rem]'>
										{details.category.name}
									</span>
								</div>
								<p className='text-gray-500 font-inter text-[1.15rem] mb-3'>
									{truncateText(details.description, 90)}
								</p>
							</div>
							<div className='flex justify-between items-center mt-auto'>
								<p className='text-gray-400'>
									<span className='text-brand font-semibold text-lg'>{details.price_level || "N/A"}</span>{" "}
									/night
								</p>
								<Button
									text={"View Details"}
									className={"text-off-white font-bold"}
									onClick={navToSignIn}
								/>
							</div>
						</div>
					)}
				</article>
			))}
		</section>
	);
};
export default TopDestinations;
