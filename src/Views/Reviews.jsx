import { SlCalender } from "react-icons/sl";
import useFetch from "../hooks/useFetch";
import useLocationStore from "../stores/useLocationStore";
import { FaStar } from "react-icons/fa6";

const Reviews = () => {
	const locationId = useLocationStore((state) => state.locationId);

	const { isLoading, isError, data } = useFetch(`location/${locationId}/reviews`);

	data && console.log(data);

	return (
		<section className="pb-6">
			<div className='w-[90%] mx-auto mt-12 flex flex-col items-center gap-6'>
				{isLoading && <p>Loading...</p>}
				{isError && <p>There was an error.</p>}
				{data &&
					data.data.map((review, index) => (
						<article
							key={index}
							className='bg-zinc-100 border border-zinc-500 rounded-md py-6 px-5 max-w-[800px]'>
							<div>
								<div className='flex justify-start items-center gap-2 mb-4'>
									<figure className=''>
										<img src={review.user.avatar.thumbnail} alt='' className='rounded-[50%]' />
									</figure>
									<p className='text-zinc-800 italic font-medium'>{review.user.username}</p>
									{/* <p className='text-zinc-800'>{review.user.user_location?.name}</p> */}
								</div>
								<h2 className='text-[1.15rem] font-medium'>{review.title}</h2>
								<p className='text-[1.05rem]/6 tracking-wide text-zinc-700'>{review.text}</p>
								<div className='flex justify-start items-center gap-2 mt-2'>
									<SlCalender className='text-[1.5rem] text-blue-600' />
									<p className='text-zinc-500 font-medium'>{review.travel_date}</p>
								</div>
								<p className='bg-purple-950 w-fit text-purple-200 py-1 px-3 rounded-full mt-3'>
									{review.trip_type}
								</p>
								<div className='flex justify-start items-center gap-2 mt-3'>
									<FaStar className='text-amber-500 text-[1.25rem]' />
									<p className='font-semibold text-zinc-500 text-[1.25rem]'>{review.rating}</p>
								</div>
							</div>
						</article>
					))}
			</div>
		</section>
	);
};
export default Reviews;
