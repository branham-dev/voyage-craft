import { Route, Routes } from "react-router-dom";
import { Dashboard, Landing, SignIn } from "./pages";
import { Search } from "./Views";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route index element={<Search />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
