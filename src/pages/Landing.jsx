import { Features, FetchTest, Footer, Hero, TopDestinations } from "../components";

const Landing = () => {
	return (
		<div className='bg-anti-flash-white min-h-screen'>
            <Hero />
			<main className='mb-24'>
				<Features />
				<TopDestinations />
				<FetchTest />
			</main>
			<Footer />
		</div>
	);
};
export default Landing;
