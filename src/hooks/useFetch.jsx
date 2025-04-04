import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async (endPoint, params) => {
	const { data } = await axios.get(
		`https://voyage-craft-proxy.onrender.com/api/tripadvisor/${endPoint}`,
		{
			params,
		},
	);
	return data;
};

const useFetch = (endPoint, params = {}, options = {}) => {
	return useQuery({
		queryKey: [endPoint, params],
		queryFn: () => fetchData(endPoint, params),
		...options,
	});
};

export default useFetch;
