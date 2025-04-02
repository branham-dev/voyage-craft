import { Route, Routes } from "react-router-dom";
import { Dashboard, Landing, SignIn } from "./pages";
import { Details, Search } from "./Views";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route index element={<Search />} />
					<Route path='details/:id' element={<Details />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
