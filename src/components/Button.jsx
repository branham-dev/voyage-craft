const Button = ({ text, className, type, onClick }) => {
	return (
		<button
			className={`bg-brand px-6 py-2 rounded-sm flex justify-center items-center tracking-wider font-inter ${className}`}
			type={type ? `${type}` : "button"}
			onClick={onClick}>
			<span className='w-full'>{text}</span>
		</button>
	);
};
export default Button;
