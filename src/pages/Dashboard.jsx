import { LuLayoutDashboard, LuPanelLeftClose } from "react-icons/lu";
import Logo from "../assets/images/logo.png";
import Icon from "../assets/images/icon-profile.png";
import { FaRegUserCircle } from "react-icons/fa";
import { Button, NavigationList } from "../components";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { TbListDetails, TbMapSearch } from "react-icons/tb";
import { FaPhotoFilm } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import useLocationStore from "../stores/useLocationStore";

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState({
		sidebar: false,
		// navRoutes: true,
		sidenav: false,
	});

	const locationId = useLocationStore((state) => state.locationId);

	const dashboardNavList = [
		["Dashboard", "/"],
		["Bookings", "/"],
		["Explore", "/"],
		["Favorites", "/"],
	];

	const appNavigation = [
		[TbMapSearch, `/dashboard`, "Search Destination"],
		[TbListDetails, `/dashboard/details/${locationId}`, "View Details"],
		[FaPhotoFilm, `/dashboard/photos/${locationId}`, "Location Photos"],
		[MdOutlineReviews, `/dashboard/reviews/${locationId}`, "User Reviews"],
		[GrMapLocation, "/", "Nearby Search"],
	];

	return (
		<>
			<div className='relative'>
				<header className='bg-deep-blue p-[1px] w-full'>
					<nav className='flex justify-between items-center cus-w'>
						<div>
							<img src={Logo} alt='' className='w-24 -mt-2 -ml-2' />
						</div>
						<div className='md:hidden transition-all duration-700'>
							{!isOpen.sidebar && (
								<button onClick={() => setIsOpen({ ...isOpen, sidebar: true })} className=''>
									<LuLayoutDashboard className='text-[1.5rem] text-secondary' />
								</button>
							)}
							{isOpen.sidebar && (
								<button onClick={() => setIsOpen({ ...isOpen, sidebar: false })}>
									<LuPanelLeftClose className='text-[1.5rem] text-secondary' />
								</button>
							)}
						</div>
						<div className='hidden md:block'></div>
					</nav>
				</header>
				<main className='w-full'>
					<aside
						className={`${
							isOpen.sidebar ? "w-full" : "w-0"
						} transition-all duration-700 h-screen bg-deep-blue pt-[1px] overflow-hidden max-w-[420px] md:hidden absolute`}>
						<div className='w-[80%] mx-auto'>
							<div className='w-full flex justify-center mt-12 mb-3'>
								<img src={Icon} alt="traveler's icon" className='w-[7.5rem]' />
							</div>
							<h1 className='text-center text-gray-300 text-[1.5rem] mb-12'>Welcome, User!</h1>
							<div className='mb-12'>
								<NavigationList
									items={dashboardNavList}
									className={"text-gray-300 flex flex-col gap-4 text-[1.35rem]"}
								/>
							</div>
							<span className='block bg-gray-600 w-full h-[1px] mb-12'></span>
							<section className='text-gray-300 flex flex-col gap-4'>
								<div className='flex justify-start items-center gap-2'>
									<HiOutlineUserCircle className='text-[2rem]' />
									<p className='text-[1.35rem]'>Account</p>
								</div>
								<div className='flex justify-start items-center gap-2'>
									<IoSettingsOutline className='text-[2rem]' />
									<p className='text-[1.35rem]'>Settings</p>
								</div>
							</section>
							<span className='block bg-gray-600 w-full h-[1px] my-12'></span>
							<Button text={"Logout"} className={"bg-gray-300 text-deep-blue mx-auto mt-12"} />
						</div>
					</aside>
					<div className='flex'>
						<aside
							className={`${
								isOpen.sidenav ? "w-[325px]" : "w-18"
							}  h-screen bg-deep-blue p-[1px] transition-all duration-500 hidden md:block`}>
							<div className={`w-[80%] mx-auto flex flex-col justify-center items-center mt-4`}>
								<div
									className={` transition-all duration-700 top-0 w-full ${
										isOpen.sidenav ? "text-end" : "text-center"
									}`}>
									{!isOpen.sidenav && (
										<button onClick={() => setIsOpen({ ...isOpen, sidenav: true })} className=''>
											<GoSidebarCollapse className='text-[2rem] text-secondary' />
										</button>
									)}
									{isOpen.sidenav && (
										<button onClick={() => setIsOpen({ ...isOpen, sidenav: false })} className=''>
											<GoSidebarExpand className='text-[2rem] text-secondary' />
										</button>
									)}
								</div>
								<div className='mt-24 w-full'>
									<nav className='text-gray-400 flex flex-col gap-10 '>
										{appNavigation.map((route, index) => {
											const Icon = route[0];
											return (
												<NavLink key={index} to={route[1]}>
													<div className='flex gap-6 items-center border border-gray-500 py-2 px-2 overflow-hidden text-nowrap'>
														<Icon className='!text-[2.5rem] block' />
														<p className={`text-[1.2rem] ${isOpen.sidenav ? "" : "hidden"}`}>{route[2]}</p>
													</div>
												</NavLink>
											);
										})}
									</nav>
								</div>
							</div>
						</aside>
						<Outlet />
					</div>
					<section className='fixed bottom-0 w-[90%] h-12rem bg-deep-blue left-[50%] -translate-[50%] py-3 px-4 rounded text-gray-400 md:hidden shadow-md border border-secondary'>
						<nav className='flex justify-around'>
							{appNavigation.map((link, index) => {
								const Icon = link[0];
								return (
									<NavLink key={index} to={link[1]}>
										<div>
											<Icon className='text-[1.6rem] sm:text-[2rem]' />
										</div>
									</NavLink>
								);
							})}
						</nav>
					</section>
				</main>
			</div>
		</>
	);
};
export default Dashboard;
