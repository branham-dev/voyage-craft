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
			<section className="pb-6">
				{isLoading && <p>Loading...</p>}
				{isError && <p>There was an error</p>}
				{data && (
					<div className='w-[90%] mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center'>
						{data.data.map((photo) => (
							<article className='w-full bg-sky-50 py-3 px-3 border border-sky-200 rounded-md max-w-[500px] lg:max-w-[unset]'>
								<figure>
									<img src={photo.images.medium.url} alt='' className='w-full' />
									<figcaption className='text-[1.1rem] text-slate-800 font-medium mt-2'>
										{photo.caption}
									</figcaption>
								</figure>
								<p className='text-slate-600 text-[0.9rem] font-medium mt-1'>
									Published: {photo.published_date}
								</p>
							</article>
						))}
					</div>
				)}
			</section>
		</>
	);
};
export default Photos;
