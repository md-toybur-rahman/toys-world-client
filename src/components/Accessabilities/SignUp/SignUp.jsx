import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../../CustomHooks/useTitle";


const SignUp = () => {
    const { createUser, signIn } = useContext(AuthContext);
    useTitle('Sign Up')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(user => {
                console.log(user.user);
                signIn(email, password)
                    .then(user => {
                        console.log(user.user);
                        navigate(from, { replace: true });
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="my-20 mx-10">
            <div className="logo flex gap-2 items-center justify-center">
                <img className='w-[40px] md:w-[50px]' src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                <h1 className='text-3xl md:text-4xl font-extrabold text-'>T<span className='text-[#f9bf00]'>O</span>YS W<span className='text-[#f9bf00]'>O</span>RLD</h1>
            </div>
            <div className="mt-10 border-2 border-[#f9bf00] md:w-1/3 mx-auto py-10 rounded-lg">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">Sign Up</h2>
                <div className="flex items-center justify-center ">
                    <form onSubmit={handleSignUp} className="flex flex-col gap-5 justify-center">
                        <div>
                            <label className="label">
                                <span className="font-bold">Your Name</span>
                            </label>
                            <label>
                                <input type="text" name="name" placeholder="Your Name" className="h-[50px] rounded-lg px-4 w-[350px] bg-gray-200" required />
                            </label>
                        </div>
                        <div>
                            <div>
                                <label className="label">
                                    <span className="font-bold">Your Email</span>
                                </label>
                                <label>
                                    <input type="email" name="email" placeholder="Your Email" className="h-[50px] rounded-lg px-4 w-[350px] bg-gray-200" />
                                </label>
                            </div>
                            {
                                error == 'Firebase: Error (auth/email-already-in-use).' ?
                                    <span className="text-sm text-red-400"> Email Already In Used.</span> :
                                    <span className="text-sm text-gray-400"> We will never share your email with anyone else.</span>
                            }
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-bold">Your Password</span>
                            </label>
                            <label>
                                <input type="password" name="password" placeholder="Your Password" className="h-[50px] rounded-lg px-4 w-[350px] bg-gray-200" required />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-bold">Your Photo URL</span>
                            </label>
                            <label>
                                <input type="text" name="photo" placeholder="Your Photo URL" className="h-[50px] rounded-lg px-4 w-[350px] bg-gray-200" required />
                            </label>
                        </div>
                        <h2 className="text-sm mt-3">Already Have an Account? Please <Link to='/login' className="text-[#f9bf00]">Login</Link></h2>
                        <div className="flex justify-center my-5">
                            <input type="submit" className='btn-custom' value='Sign Up' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;