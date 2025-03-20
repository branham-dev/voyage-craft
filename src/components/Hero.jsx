import Button from "./Button";
import LandingNavbar from "./LandingNavbar";

const Hero = () => {
	return (
		<div className='relative'>
			<header className='bg-[url(src/assets/images/hero-image.png)] w-full max-h-[930px] h-[65vh] bg-right bg-cover relative'>
				<div className='absolute w-full h-full bg-black/68 text-amber-50'>
					<div className=''>
						<div className='cus-w'>
							<LandingNavbar />
							<h1 className='mt-18 sm:mt-24 font-playfair text-3xl sm:text-4xl'>Your Next Destination, Just a Click Away!</h1>
							<p className='mt-6 sm:mt-8 text-lg/8 sm:text-2xl/9 tracking-wide'>
								Discover top-rated hotels, attractions, and restaurants effortlessly. Plan your perfect trip
								with real reviews, stunning photos, and nearby recommendations.
							</p>
							<Button text={"Start Exploring"} className={"mt-6 sm:mt-8 font-medium "} />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
export default Hero;
