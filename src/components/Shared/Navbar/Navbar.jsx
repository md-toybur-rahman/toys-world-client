import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
// import { MdMenu, MdClose } from "react-icons/md";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className=" flex items-center justify-between p-5 md:px-10 py-4 bg-white">
            <div className='text-2xl md:hidden'>
                {/* <MdMenu></MdMenu>
                <MdClose className='hidden'></MdClose> */}
                <label className="swap swap-rotate">


                    <input type="checkbox" />


                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>


                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
            </div>
            <div className="logo flex gap-2 items-center">
                <img className='w-[40px] md:w-[50px]' src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                <h1 className='text-2xl md:text-3xl font-extrabold text-'>T<span className='text-[#f9bf00]'>O</span>YS W<span className='text-[#f9bf00]'>O</span>RLD</h1>
            </div>
            <div className="hidden md:flex gap-7 font-bold text-[16px]">
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/allToys'>All Toys</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/myToys'>My Toys</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/addToy'>Add Toy</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/blog'>Blog</NavLink>
            </div>
            <div className="md:hidden hidden flex-col gap-3 font-bold text-[16px] absolute bg-sky-200 left-0 top-16 py-7 px-5">
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/allToys'>All Toys</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/myToys'>My Toys</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/addToy'>Add Toy</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/blog'>Blog</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/blog'>Login</NavLink>
            </div>
            <div className='flex items-center gap-7'>
                <img className='rounded-full w-[40px] md:w-[60px]' src={!user?.photoURL ? "https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/user-profile-icon.png" : user.photoURL} alt="" />
                {
                    user ?
                        <Link ><button onClick={handleLogOut} className='btn-custom hidden md:block'>Log Out</button></Link> :
                        <Link to='/login'><button className='btn-custom hidden md:block'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;