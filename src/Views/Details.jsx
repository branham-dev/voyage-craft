import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { SiCssdesignawards } from "react-icons/si";
import { FaAward, FaRankingStar } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Details = () => {
	const { id } = useParams();
	const [imageIndex, setImageIndex] = useState(0);

	const { isLoading, isError, data } = useFetch(`location/${id}/details`, {}, {});
	const {
		isLoading: isPhotoLoading,
		isError: isPhotoError,
		data: photoData,
	} = useFetch(`location/${id}/photos`, {}, {});

	data && console.log(data);
	photoData && console.log(photoData);

	return (
		<>
			<section className=' w-full pb-12'>
				<header className='w-full mt-4'>
					{isPhotoLoading && <p>Loading Image...</p>}
					{isPhotoError && <p>There was an error loading the image</p>}
					{photoData && (
						<div className='w-[95%] m-auto'>
							<div className='mt-8 mb-6 flex justify-between items-center'>
								<div>
									<h1 className='text-[2.35rem] font-playfair text-slate-800'>{data.name}</h1>
									<p className='-mt-1 font-medium text-slate-500 text-md'>
										{data.address_obj.street1}, {data.address_obj.city}, {data.address_obj.country}
									</p>
								</div>
								<div>
									<p
										className={`${
											data.category.name === "hotel"
												? "text-emerald-600 bg-emerald-100"
												: data.category.name === "restaurant"
												? "text-amber-600 bg-amber-100"
												: data.category.name === "attraction"
												? "text-purple-600 bg-purple-100"
												: ""
										} px-6 py-0.5 rounded-full text-[1.1rem] font-medium`}>
										{data.category.name}
									</p>
								</div>
							</div>
							<figure>
								<img
									src={photoData.data[imageIndex].images.original?.url}
									alt={data?.name || "Location image"}
									className='block w-full h-[30rem] object-cover'
								/>
							</figure>
						</div>
					)}
				</header>
				<main className='mt-6 w-[95%] mx-auto'>
					{isLoading && <p>Loading...</p>}
					{isError && <p>There was an error</p>}
					{data && (
						<div>
							<div className=''>
								<div className='flex justify-between items-start mb-12 mt-10'>
									<div className='flex flex-col gap-2'>
										<div className='flex justify-start items-center gap-2'>
											<IoIosStar className='text-[1.5rem] text-amber-500' />
											<p className='text-slate-600 font-semibold text-[1.25rem]'>{data.rating}</p>
										</div>
										<div className='flex justify-start items-center gap-2'>
											<BsFillTelephoneFill className='text-[1.5rem] text-brand' />
											<p className='text-slate-600 text-[1.2rem] font-medium'>{data.phone}</p>
										</div>
										<div className='flex justify-start items-center gap-2'>
											<FaRankingStar className='text-[2rem] text-lime-500' />
											<p className='text-slate-600 text-[1.1rem] font-medium'>
												{data.ranking_data?.ranking_string}
											</p>
										</div>
									</div>
									<div className='flex flex-col gap-6'>
										<div className='flex justify-end items-center gap-1'>
											{data.styles.length > 0
												? data.styles.map((style) => (
														<p className='bg-neutral-900 w-fit py-1 px-4 rounded-full text-neutral-400 font-medium'>
															{style}
														</p>
												  ))
												: null}
										</div>
										<div>
											<p className=''>
												<span className='font-semibold text-[2rem] text-brand'>{data.price_level}</span>
												<span className='text-slate-500 font-medium text-[1.2rem]'>/night</span>
											</p>
										</div>
									</div>
								</div>
								<section>
									<h2 className='text-[1.8rem] text-slate-800 font-medium mb-4'>Awards</h2>
									<div className='bg-purple-100 py-4 px-6 rounded'>
										{data.awards
											? data.awards.map((award) => {
													return (
														<div className='shadow-lg bg-amber-50 w-fit relative'>
															<FaAward className='text-[2rem] absolute shadow-2xl shadow-black text-yellow-500 top-3 left-2 animate-bounce' />
															<figure>
																<img src={award.images.tiny} alt='' />
															</figure>
														</div>
													);
											  })
											: null}
									</div>
								</section>
								<section className='mt-16'>
									<h2 className='dashboard-headings'>Overview</h2>
									<p className='text-slate-600 text-[1.25rem]/9 font-inter'>{data.description}</p>
								</section>
								<section className='mt-16 mb-12'>
									<h2 className='dashboard-headings'>Amenities</h2>
									<div className='h-[500px] overflow-auto shadow-lg p-3 bg-blue-50 flex justify-center items-center rounded-2xl'>
										<div className='h-[100%] overflow-auto'>
											<ul className='flex flex-wrap gap-4'>
												{data.amenities.map((amenity) => (
													<li className=' bg-gray-800 text-gray-200 font-semibold py-1 px-6 rounded-full'>
														{amenity}
													</li>
												))}
											</ul>
										</div>
									</div>
								</section>
							</div>
						</div>
					)}
				</main>
			</section>
		</>
	);
};
export default Details;
