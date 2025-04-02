const Button = ({ text, className, type }) => {
	return (
		<button
			className={`bg-brand px-6 py-2 rounded-sm flex justify-center items-center tracking-wider font-inter ${className}`}
			type={type ? `${type}` : "button"}>
			<div className='w-full'>{text}</div>
		</button>
	);
};
export default Button;
