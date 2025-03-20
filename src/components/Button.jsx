const Button = ({ text, className }) => {
	return (
		<button
			className={`bg-brand px-6 py-2 rounded-sm flex justify-center items-center tracking-wider font-inter ${className}`}>
			<div className='w-full'>{text}</div>
		</button>
	);
};
export default Button;
