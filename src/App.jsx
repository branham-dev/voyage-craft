import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/signin' element={<Landing />} />
			</Routes>
		</>
	);
}

export default App;
