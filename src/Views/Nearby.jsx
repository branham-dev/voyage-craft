import { useParams } from "react-router-dom";
import useLocationStore from "../stores/useLocationStore";
import useFetch from "../hooks/useFetch";
import { FaRegCompass } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";

const Nearby = () => {
	const { nearbyId } = useParams();

	const locationLongitude = useLocationStore((state) => state.longitude);
	const locationLatitude = useLocationStore((state) => state.latitude);

	console.log(nearbyId, locationLongitude, locationLatitude);

	const { isLoading, isError, data } = useFetch(
		`location/nearby_search`,
		{ latLong: `${locationLatitude}, ${locationLongitude}` },
		{},
	);

	data && console.log(data);

	return (
		<section className='pb-6'>
			<div className='w-[90%] mx-auto flex flex-col gap-4 mt-8'>
				{isLoading && <p>Loading...</p>}
				{isError && <p>There was an error</p>}
				{data &&
					data.data.map((location, index) => (
						<article key={index} className='bg-indigo-50 py-2 px-6 border border-indigo-300 rounded'>
							<h2 className='font-medium text-indigo-950 text-[1.25rem]'>{location.name}</h2>
							<p className='text-indigo-900'>{location.address_obj.street1}</p>
							<div className='flex justify-start items-center gap-2'>
								<FaRegCompass className='text-[1.25rem] text-sky-600' />
								<p className='text-[1.05rem]/8 font-medium text-zinc-500'>{location.bearing}</p>
							</div>
							<div className='flex justify-start items-center gap-2'>
								<GiPathDistance className='text-[1.35rem] text-sky-600' />
								<p className='text-zinc-400'>{location.distance}</p>
							</div>
						</article>
					))}
			</div>
		</section>
	);
};
export default Nearby;
