import Logo from "../assets/images/logo.png";
import { RiMenuUnfold2Line, RiMenuUnfoldLine } from "react-icons/ri";
import NavigationList from "./NavigationList";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const items = [
		["Home", "/"],
		["Explore", "/explore"],
		["Favorites", "/favorites"],
		["About", "/about"],
	];

	const navigate = useNavigate();

	const navToSignIn = () => {
		// console.log("Here!");
		navigate("/sign-in");
	};

	return (
		<nav>
			<div>
				<div className='flex justify-between items-center'>
					<div>
						<img src={Logo} alt='logo' className='logo-properties' />
					</div>
					{/* Mobile Display */}
					<button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<RiMenuUnfold2Line className='text-4xl' />
						) : (
							<RiMenuUnfoldLine className='text-4xl' />
						)}
					</button>
					{/* Desktop Display */}
					<div className='hidden md:flex bg-gunmetal px-8 py-3 font-inter text-lg rounded-full w-[70%] justify-between items-center'>
						<NavigationList className='flex justify-around w-[75%]' items={items} />
						<Button text={"Sign In"} onClick={navToSignIn} />
					</div>
				</div>
				{/* Mobile Sidebar */}
				<aside
					className={`bg-gunmetal/60 border-none absolute text-anti-flash-white overflow-hidden top-30 left-0 py-6 flex flex-col gap-12 ${
						isOpen ? "w-[100%] max-w-[300px] px-8" : "w-0 px-0 border-none"
					}  md:hidden rounded-e-xl shadow-2xl backdrop-blur-lg transition-discrete duration-700`}>
					<div className='flex flex-col gap-12 w-[60%] m-auto'>
						<NavigationList className={"flex flex-col gap-12 text-2xl"} items={items} />
						<Button text={"Sign In"} className={"w-full whitespace-nowrap overflow-hidden"} />
					</div>
				</aside>
			</div>
		</nav>
	);
};
export default LandingNavbar;
