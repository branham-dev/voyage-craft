import { NavLink } from "react-router-dom";

const NavigationList = ({className}) => {
	const items = [
		["Home", "/"],
		["Explore", "/explore"],
		["Favorites", "/favorites"],
		["About", "/about"],
	];

	return (
		<ul className={className}>
			{items.map((item, index) => (
				<NavLink key={index} to={item[1]}>
					{({ isActive }) => (
						<li>
							<span className={isActive ? "" : ""}>{item[0]}</span>
						</li>
					)}
				</NavLink>
			))}
		</ul>
	);
};
export default NavigationList;
