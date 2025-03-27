import { FiMapPin } from "react-icons/fi";
import { HiOutlineMap } from "react-icons/hi2";
import { RiMessage2Line } from "react-icons/ri";

const Features = () => {
	const ourFeatures = [
		{
			icon: HiOutlineMap,
			title: "Discover New Destinations",
			text:
				"Uncover hidden gems and popular hot spots around the world. Whether you're planning your next adventure or just exploring from home, find the best places to visit, stay, and dine—all in one place.",
		},
		{
			icon: RiMessage2Line,
			title: "Read Reviews & See Photos",
			text:
				"Make informed travel decisions with authentic reviews and stunning photos from real visitors. Explore experiences, insights, and snapshots that bring destinations to life before you go.",
		},
		{
			icon: FiMapPin,
			title: "Find Nearby Places",
			text:
				"Uncover hidden gems and popular hot spots around the world. Whether you're planning your next adventure or just exploring from home, find the best places to visit, stay, and dine—all in one place.",
		},
	];

	return (
		<section className='cus-w mt-18 pt-0.5'>
			<h2 className='heading-2 mb-12 text-center'>Our Features</h2>
			<div className='w-full flex flex-col lg:flex-row justify-between items-center lg:items-stretch lg:gap-2 gap-18'>
				{ourFeatures.map((feature, index) => (
					<article
						key={index}
						className='border border-platinum shadow-sm flex flex-col items-center gap-6 text-center py-12 lg:py-6 xl:py-12 px-6 max-w-[400px] lg:max-w-[335px] xl:max-w-[400px]'>
						<feature.icon className='text-5xl lg:text-4xl xl:text-5xl text-brand' />
						<h3 className='font-playfair text-deep-blue text-2xl lg:text-lg xl:text-2xl font-medium'>
							{feature.title}
						</h3>
						<p className='font-inter text-soft-gray w-[80%] lg:w-full lg:text-sm xl:text-lg'>
							{feature.text}
						</p>
					</article>
				))}
			</div>
		</section>
	);
};
export default Features;
