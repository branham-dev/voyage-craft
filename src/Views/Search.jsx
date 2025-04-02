import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { Button } from "../components";
import { useQueryClient } from "@tanstack/react-query";

const getLocationDetails = async (id) => {
	try {
		const { data } = await axios.get(`http://localhost:5000/api/tripadvisor/location/${id}/details`);
		return data;
	} catch (error) {
		throw new Error("Failed to fetch location details");
	}
};

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [submittedTerm, setSubmittedTerm] = useState("");
	const [error, setError] = useState("");
	// | TODO
	// const [locationData, setLocationData] = useState([]);

	const [locationId, setLocationId] = useState("");

	const { isLoading, isError, data } = useFetch(
		"location/search",
		submittedTerm
			? {
					searchQuery: submittedTerm,
					// category: "attraction",
			  }
			: null,
		{ enabled: !!submittedTerm },
	);

	const {
		isLoading: isDetailsLoading,
		isError: isDetailsError,
		data: detailsData,
	} = useFetch(`location/${locationId}/details`, {}, { enabled: !!locationId });

	// | TODO
	// useEffect(() => {
	// 	if (data?.data) {
	// 		setLocationData(data.data);
	// 	}
	// }, [data]);

	// | TODO
	// useEffect(() => {
	// 	if (locationData.length > 0) {
	// 		const dataIds = locationData.map((location) => location.location_id);
	// 		console.log(dataIds);
	// 	}
	// }, [locationData]);

	const handleChange = (event) => {
		event.preventDefault();
		setError("");
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setLocationId("");
		if (!searchTerm) {
			setError("You must enter a search term");
			setTimeout(() => {
				setError("");
			}, 3000);
			return;
		}
		setSubmittedTerm(searchTerm);
		setSearchTerm("");
	};

	const loadLocation = (id) => {
		setSubmittedTerm("");
		setLocationId(id);
		console.log(id);
	};

	data && console.log("Search Data:", data);
	detailsData && console.log("Details Data:", detailsData);

	return (
		<>
			<section className='flex-1'>
				<div className='w-[80%] mx-auto'>
					<h1 className='text-center text-blue-950 mt-8 text-[2rem] font-semibold mb-2'>
						Find Your Perfect Destination
					</h1>
					<p className='text-center text-[1.15rem] w-[50%] mx-auto text-gray-600'>
						Search through thousands of destinations to find your next adventure
					</p>
					<form
						className='w-full mx-auto mt-12 flex justify-between items-stretch gap-4'
						onSubmit={handleSubmit}>
						<label className='block flex-4 relative'>
							<input
								type='text'
								className='outline-none border-solid border border-gray-500 rounded w-full px-4 pt-2 pb-2.5 text-[1.35rem] text-gray-700'
								placeholder='Search destinations, cities, or attractions'
								value={searchTerm}
								onChange={handleChange}
							/>
							{error && <p className='absolute -bottom-6 text-[1rem] text-red-600'>{error}</p>}
						</label>
						<Button text={"Search"} className={"text-off-white flex-1"} type={"submit"} />
					</form>
				</div>
				<div className='w-[80%] mx-auto mt-12'>
					{isLoading && <p className='text-emerald-500 font-semibold'>Loading...</p>}
					{isError && <p>There was an error</p>}
					{Array.isArray(data?.data) &&
						data.data.map((object) => (
							<article
								key={object.location_id}
								className='py-2 px-4 bg-slate-100 mb-1 rounded-md flex justify-between items-center'>
								<div>
									<h2 className='text-[1.1rem] text-slate-900 font-semibold'>{object.name}</h2>
									<p className='text-[0.9rem] text-slate-500'>{object.address_obj.address_string}</p>
								</div>
								<button
									className='border border-orange-500 px-6 py-1.5 rounded text-sky-900 font-semibold'
									onClick={() => loadLocation(object.location_id)}>
									View
								</button>
							</article>
						))}
				</div>
				{/* Display location details */}
				<div className='w-[80%] mx-auto mt-12'>
					{isDetailsLoading && <p className='text-emerald-500 font-semibold'>Loading details...</p>}
					{isDetailsError && <p>There was an error fetching details</p>}
					{detailsData && (
						<div className='py-4 px-6 bg-white shadow-md rounded-md'>
							<div className='flex justify-between items-center'>
								<div>
									<h2 className='text-xl font-semibold text-gray-900'>{detailsData.name}</h2>
									<p className='text-orange-600 text-[0.9rem] font-medium mb-2'>
										{detailsData.address_obj.city}, {detailsData.address_obj.country}
									</p>
								</div>
								<p className='text-emerald-600 w-fit px-4 rounded-md text-sm/6 bg-emerald-100 font-medium'>
									{detailsData.category.name}
								</p>
							</div>
							<p className='text-gray-600'>{detailsData.description}</p>
							<p className='text-gray-500 text-sm'>{detailsData.address}</p>
						</div>
					)}
				</div>
			</section>
			<section></section>
		</>
	);
};
export default Search;
