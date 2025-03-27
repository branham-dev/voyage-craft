import { Features, Hero, TopDestinations } from "../components";

const Landing = () => {
	return (
		<div className='bg-anti-flash-white min-h-screen'>
			<Hero />
			<main className='mb-24'>
				<Features />
				<TopDestinations />
				
			</main>
		</div>
	);
};
export default Landing;
