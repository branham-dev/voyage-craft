import { useNavigate } from "react-router-dom";
import Airplane from "../assets/images/airplane.jpg";
import { Button } from "../components";

const SignIn = () => {
	const inputUtilities = `border rounded-sm text-[1.25rem] text-gray-600 border-gray-300 placeholder:text-[1rem] pl-1 pb-1 outline-none w-full`;
	const navigate = useNavigate();
	return (
		<main className='h-screen'>
			<div className='bg-[url(./assets/images/airplane.jpg)] w-fill h-full pt-1 flex justify-center items-center'>
				{/* <img src={Airplane} alt='' /> */}
				<div className='cus-w text-[1.25rem] bg-teal-50/85 my-auto py-12 max-w-[600px] rounded'>
					<h1 className='text-center text-blue-950 font-semibold text-[2rem] mb-4'>Welcome Back!</h1>
					<p className='w-[80%] text-center mx-auto text-gray-700 mb-12'>
						Sign in to your account to continue your journey
					</p>
					<form className='border border-gray-400 w-[90%] mx-auto px-4 py-8 rounded-lg shadow-lg'>
						<label className='mb-6 block'>
							<p className='mb-2'>Full Name:</p>
							<input type='text' className={inputUtilities} placeholder='Enter your name' />
						</label>
						<label className='mb-8 block'>
							<p className='mb-2'>Password:</p>
							<input type='password' className={inputUtilities} placeholder='Enter your password' />
						</label>
						<Button
							text={"Sign In"}
							type={"submit"}
							className={"text-off-white mx-auto w-full"}
							onClick={() => navigate("/dashboard")}
						/>
					</form>
				</div>
			</div>
		</main>
	);
};
export default SignIn;
