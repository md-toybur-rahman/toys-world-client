import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { ScrollContext } from "../../Providers/ScrollProvider";
import { Rating } from '@smastrom/react-rating'


const ToyDetails = () => {
    const scrollHandler = useContext(ScrollContext)
    const toy = useLoaderData();
    const { toy_name, picture, price, seller_name, sub_category, available_quantity, description, rating } = toy[0];
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const handleRoute = () => {
        navigate(from, { replace: true });
        scrollHandler();
    }
    return (
        <div className="mt-20 md:mx-20 mx-5">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div data-aos="fade-right" data-aos-duration="1000" className="md:w-1/2 md:border-r-2 md:border-gray-300">
                    {
                        picture ?
                            <img className="w-[500px] rounded-lg" src={picture} alt="" /> :
                            <div className="relative">
                                <img className="w-[500px] rounded-lg" src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                                <h3 className="text-2xl my-5 md:text-4xl text-center font-bold md:absolute top-16 left-24 bg-black text-[#f9bf00] px-4 py-2 rounded-md">No Image Found</h3>
                            </div>
                    }
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="md:w-1/2 flex flex-col gap-4 pl-10 mt-10 md:mt-0">
                    <h3 className="font-bold text-3xl text-[#f9bf00] md:text-5xl mb-7">{toy_name}</h3>
                    <h3 className="font-bold text-lg"><span className="text-[#f9bf00]">Seller Name:</span> {seller_name}</h3>
                    <h3 className="font-bold text-lg"><span className="text-[#f9bf00]">Sub Category:</span> {sub_category}</h3>
                    <h3 className="font-bold text-lg"><span className="text-[#f9bf00]">Price:</span> {price}</h3>
                    <h3 className="font-bold text-lg"><span className="text-[#f9bf00]">Available Quantity:</span> {available_quantity}</h3>
                    <div className='flex-grow-1 d-flex align-items-center my-3 text-muted'>
                        <div className="font-bold text-lg flex flex-col">
                            <div>
                                <span className="text-[#f9bf00]">Rating: </span>
                                <span className='ms-2'>{rating}</span>
                            </div>
                            <div className="text-center mt-1">
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={Math.round(rating || 0)} readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="font-semibold text-md"><span className="text-[#f9bf00]">Description: </span> {description}</h3>
                </div>
            </div>
            <div className="flex justify-center mt-20 mb-20">
                <button onClick={handleRoute} className="btn-custom">Go Back</button>
            </div>
        </div>
    );
};

export default ToyDetails;