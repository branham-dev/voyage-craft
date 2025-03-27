import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	const footerLinks = [
		[
			"Explore Destinations",
			"Top Hotels",
			"Best Restaurants",
			"Must-Visit Attractions",
			"Stunning Photos",
		],
		["Home", "Destinations", "Travel Tips", "Blog"],
		["FAQs", "Terms Of Service", "Privacy Policy"],
	];

	const socialIconLinks = [
		[FaXTwitter, "#"],
		[FaLinkedinIn, "#"],
		[FaInstagram, "#"],
		[FaFacebookF, "#"],
	];

	return (
		<footer className='bg-deep-blue pb-1 pt-6 cus-w rounded-2xl'>
			<div className='w-[90%] m-auto'>
				<div className='mb-8'>
					<img src={Logo} alt='Logo' className='w-42 -ml-4' />
					<div className='flex mt-6 gap-4'>
						{socialIconLinks.map((iconObject, index) => {
							const Icon = iconObject[0];
							return (
								<a key={index} href={iconObject[1]} className='block'>
									<Icon className='text-[1.8rem] text-off-white' />
								</a>
							);
						})}
					</div>
				</div>
				<div className='flex flex-col gap-3 text-gray-300 text-[1.2rem]'>
					{footerLinks.map((section, index) => (
						<section key={index}>
							<ul className='flex flex-col gap-3.5'>
								{section.map((link, index) => (
									<li key={index}>
										<Link>{link}</Link>
									</li>
								))}
							</ul>
							<div className='bg-gray-500 w-full h-[1px] mt-4 mb-4'></div>
						</section>
					))}
				</div>
				<p className='text-gray-600 text-lg text-center mt-2 mb-5'>
					© 2025 Travel. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
