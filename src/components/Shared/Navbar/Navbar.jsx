import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    const [menu, setMenu] = useState(false)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                setMenu(false)
            })
            .catch()
    }
    return (
        <div className=" flex items-center justify-between p-5 md:px-10 py-4 bg-sky-200 md:bg-white">
            <div className='text-2xl md:hidden'>
                {/* <MdMenu></MdMenu>
                <MdClose className='hidden'></MdClose> */}
                <label className="swap swap-rotate">
                    <input type="checkbox" />

                    {
                        !menu ?
                            <MdMenu onClick={() => setMenu(!menu)}></MdMenu>

                            : <MdClose onClick={() => setMenu(!menu)}></MdClose>
                    }
                </label>
            </div>
            <Link>
                <div className="logo flex gap-2 items-center">
                    <img className='w-[40px] md:w-[50px]' src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                    <h1 className='text-2xl md:text-3xl font-extrabold text-'>T<span className='text-[#f9bf00]'>O</span>YS W<span className='text-[#f9bf00]'>O</span>RLD</h1>
                </div>
            </Link>
            <div className="hidden md:flex gap-7 font-bold text-[16px]">
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/allToys'>All Toys</NavLink>
                {
                    user ?
                        <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/myToys'>My Toys</NavLink>
                        : ''
                }
                {
                    user ?
                        <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/addToy'>Add Toy</NavLink>
                        : ''
                }

                <NavLink className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/blog'>Blog</NavLink>
            </div>
            <div className={`${menu ? 'absolute top-16 left-0 flex flex-col gap-3 font-bold text-[16px] py-5 px-10 bg-sky-200 duration-300' : 'absolute top-16 -left-40 flex flex-col gap-3 font-bold text-[16px] py-5 px-10 bg-sky-200 duration-300'} `}>
                <NavLink onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/'>Home</NavLink>
                <NavLink onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/allToys'>All Toys</NavLink>
                {
                    user ?
                        <NavLink onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/myToys'>My Toys</NavLink>
                        : ''
                }
                {
                    user ?
                        <NavLink onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/addToy'>Add Toy</NavLink>
                        : ''
                }
                <NavLink onClick={() => setMenu(!menu)} className={({ isActive }) => isActive ? 'text-[#f9bf00]' : 'hover:text-[#f9bf00] duration-300'} to='/blog'>Blog</NavLink>
                {
                    user ?
                        <NavLink onClick={handleLogOut} className="hover:text-[#f9bf00] duration-300">LogOut</NavLink>
                        : <NavLink className="hover:text-[#f9bf00] duration-300" to='/login'>Login</NavLink>
                }
            </div>
            <div className='flex items-center gap-7'>
                <div className="dropdown dropdown-left dropdown-center dropdown-hover">
                    {
                        user ?
                            <label tabIndex={0}>
                                <img className='rounded-full w-[40px] md:w-[60px]' src={!user?.photoURL ? "https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/user-profile-icon.png" : user.photoURL} alt="" />
                            </label> :
                            ''
                    }
                    {
                        user?.displayName ?
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box min-w-[100px]">
                                <h2>{user?.displayName}</h2>
                            </ul> :
                            ''
                    }

                </div>


                <div>
                    {
                        user ?
                            <Link ><button onClick={handleLogOut} className='btn-custom hidden md:block'>Log Out</button></Link> :
                            <Link to='/login'><button className='btn-custom hidden md:block'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;