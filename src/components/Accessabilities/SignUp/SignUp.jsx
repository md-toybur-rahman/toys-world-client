import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="my-20 mx-10">
            <div className="logo flex gap-2 items-center justify-center">
                <img className='w-[40px] md:w-[50px]' src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                <h1 className='text-3xl md:text-4xl font-extrabold text-'>T<span className='text-[#ff9000]'>O</span>YS W<span className='text-[#ff9000]'>O</span>RLD</h1>
            </div>
            <div className="mt-10 border-2 border-[#ff9000] md:w-1/3 mx-auto py-10 rounded-lg">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">Sign Up</h2>
                <div className="flex items-center justify-center ">
                    <form className="flex flex-col gap-5 justify-center">
                        <div>
                            <label className="label">
                                <span className="font-bold">Your Name</span>
                            </label>
                            <label>
                                <input type="text" name="name" placeholder="Your Name" className="h-[50px] rounded-lg px-4 w-[350px] bg-gray-200" />
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
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-bold">Your Password</span>
                            </label>
                            <label>
                                <input type="password" name="email" placeholder="Your Password" className="h-[50px] rounded-lg px-4 w-[350px] bg-gray-200" />
                            </label>
                        </div>
                        <h2 className="text-sm mt-3">Already Have an Account? Please <Link to='/login' className="text-[#ff9000]">Login</Link></h2>
                        <div className="flex justify-center my-5">
                            <Link><button className='btn-custom'>Sign Up</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;