import { useParams } from "react-router-dom";
import useLocationStore from "../stores/useLocationStore";
import useFetch from "../hooks/useFetch";

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

	return <div>Nearby</div>;
};
export default Nearby;
