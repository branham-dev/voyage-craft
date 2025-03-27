import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const FetchTest = () => {
	const { isLoading, isError, data } = useFetch("location/search", { searchQuery: "Netherlands" });

	useEffect(() => {
		data && console.log(data);
	});

	return <div>FetchTest</div>;
};
export default FetchTest;
