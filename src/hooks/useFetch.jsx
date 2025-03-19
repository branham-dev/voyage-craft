import axios from "axios";
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

export { fetchData };
