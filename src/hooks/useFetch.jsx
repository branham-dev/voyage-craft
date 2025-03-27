import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (endPoint, params) => {
	const { data } = await axios.get(`http://localhost:5000/api/tripadvisor/${endPoint}`, {
		params,
	});
	return data;
};

const useFetch = (endPoint, params = {}) => {
	return useQuery({
		queryKey: [endPoint, params],
		queryFn: () => fetchData(endPoint, params),
	});
};

export default useFetch;
