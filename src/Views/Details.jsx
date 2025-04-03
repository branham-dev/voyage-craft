import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

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
			<section className='bg-amber-100 w-full'>
				<header className='w-full mt-4'>
					{isPhotoLoading && <p>Loading Image...</p>}
					{isPhotoError && <p>There was an error loading the image</p>}
					{photoData && (
						<div className='w-[90%] m-auto'>
							<figure>
								<img
									src={photoData.data[imageIndex].images.original.url}
									alt=''
									className='block w-full h-[30rem] object-cover'
								/>
							</figure>
						</div>
					)}
				</header>
				<main>
					{isLoading && <p>Loading...</p>}
					{isError && <p>There was an error</p>}
					{data && (
						<div>
							<h1>{data.name}</h1>
						</div>
					)}
				</main>
			</section>
		</>
	);
};
export default Details;
