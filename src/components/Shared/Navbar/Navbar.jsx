import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
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
        <div className=" flex items-center justify-between px-10 py-4 border-b-2 border-[#f9bf00]">
            <div className='text-2xl md:hidden'>
                <MdMenu></MdMenu>
                <MdClose className='hidden'></MdClose>
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
                {
                    user ?
                        <img className='w-[40px] md:w-[50px]' src="https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/user-profile-icon.png" alt="" /> :
                        ''
                }
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