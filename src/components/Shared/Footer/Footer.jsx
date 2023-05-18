import { FaFacebook, FaInstagram, FaTwitter, FaHome, FaPhone, FaClock } from 'react-icons/fa';
import { MdMail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='border-t-2 border-[#ff9000] px-10 md:px-28 py-20 text-center md:text-start'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0 justify-between'>
                <div className='flex flex-col items-center md:items-start gap-5 mb-10'>
                    <div className="logo flex gap-2 items-center mb-3">
                        <img className='w-[40px] md:w-[50px]' src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                        <h1 className='text-2xl md:text-3xl font-extrabold text-'>T<span className='text-[#ff9000]'>O</span>YS W<span className='text-[#ff9000]'>O</span>RLD</h1>
                    </div>
                    <div className='flex flex-col gap-7 text-md md:text-xl font-bold'>
                        <a href='http://facebook.com' target='blank' className='flex gap-3 items-center'><FaFacebook className=' text-[#ff9000] text-2xl md:text-3xl'></FaFacebook>Facebook</a>
                        <a href='http://instagram.com' target='blank' className='flex gap-3 items-center'><FaInstagram className=' text-[#ff9000] text-2xl md:text-3xl'></FaInstagram>Instagram</a>
                        <a href='http://twitter.com' target='blank' className='flex gap-3 items-center'><FaTwitter className=' text-[#ff9000] text-2xl md:text-3xl'></FaTwitter>Twitter</a>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl md:text-2xl font-bold mb-5'>ABOUT</h2>
                    <div className='flex flex-col text-md md:text-xl gap-3'>
                        <Link>History</Link>
                        <Link>Wishlist</Link>
                        <Link>Services</Link>
                        <Link>News</Link>
                        <Link>Contact</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl md:text-2xl font-bold mb-5'>SUPPORT</h2>
                    <div className='flex flex-col text-md md:text-xl gap-3'>
                        <Link>Chat Support</Link>
                        <Link>Email Support</Link>
                        <Link>Terms of Support</Link>
                        <Link>Press Release</Link>
                        <Link>Star Support</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl md:text-2xl font-bold mb-5'>CONTACT US</h2>
                    <div className='flex flex-col gap-3'>
                        <Link className='flex items-center gap-3 text-md md:text-xl text-start'><FaHome></FaHome> Shop no - 100, Boshundhara, <br /> Panthapath, Dhaka</Link>
                        <Link className='flex items-center gap-3 text-md md:text-xl'><FaPhone></FaPhone> 0000 - 123 - 45678</Link>
                        <Link className='flex items-center gap-3 text-md md:text-xl'><FaClock></FaClock> 9.00 AM - 6.00 PM</Link>
                        <Link className='flex items-center gap-3 text-md md:text-xl'><MdMail></MdMail>demo@example.com</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;