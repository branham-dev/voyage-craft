import { create } from "zustand";

const useLocationStore = create((set) => ({
	locationId: "",
	longitude: "",
	latitude: "",

	updateLocationId: (id) => {
		set({ locationId: id });
	},
	updateLocationData: (id, lat, lon) => {
		// console.log("Populated Data:", id, lat, lon);
		set({ longitude: lon, latitude: lat });
	},
}));

export default useLocationStore;
