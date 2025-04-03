import { create } from "zustand";

const useLocationStore = create((set) => ({
	locationId: "",
	updateLocationId: (id) => {
		set({ locationId: id });
	},
}));

export default useLocationStore;
