import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" flex items-center justify-between px-10 py-4">
            <div className="logo flex gap-2 items-center">
                <img src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                <h1 className='text-3xl font-extrabold text-'>T<span className='text-[#ff9000]'>O</span>Y W<span className='text-[#ff9000]'>O</span>RLD</h1>
            </div>
            <div className=" flex gap-7 font-bold text-[16px]">
                <NavLink className={({isActive}) => isActive ? 'text-[#ff9000]' : 'hover:text-[#ff9000] duration-300'} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-[#ff9000]' : 'hover:text-[#ff9000] duration-300'} to='/allToys'>All Toys</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-[#ff9000]' : 'hover:text-[#ff9000] duration-300'} to='/myToys'>My Toys</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-[#ff9000]' : 'hover:text-[#ff9000] duration-300'} to='/addToy'>Add Toy</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-[#ff9000]' : 'hover:text-[#ff9000] duration-300'} to='/blog'>Blog</NavLink>
            </div>
            <div className='flex items-center gap-7'>
                <img className='user-profile' src="https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/user-profile-icon.png" alt="" />
                <button className='btn-custom'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;