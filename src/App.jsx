import axios from "axios";
import { useEffect } from "react";

function App() {
	const fetchData = async (searchQuery) => {
		try {
			const response = await axios.get(`http://localhost:5000/api/tripadvisor/location/search`, {
				params: { searchQuery, category: "hotels" },
			});
			const data = await response.data;
			console.log(data);
		} catch (error) {
			console.error("Error fetching locations:", error.response?.data || error.message);
			return null;
		}
	};

	useEffect(() => {
		(async () => {
			await fetchData("Nairobi");
		})();
	}, []);

	return <></>;
}

export default App;
