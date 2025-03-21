import { Features, Hero } from "../components";

const Landing = () => {
	return (
		<div className="bg-anti-flash-white min-h-screen">
			<Hero />
			{/* <main> */}
				<Features />
			{/* </main> */}
		</div>
	);
};
export default Landing;
