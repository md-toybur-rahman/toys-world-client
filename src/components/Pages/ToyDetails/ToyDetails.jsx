import { Link, useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toy = useLoaderData();
    const { toy_name, picture, price, seller_name, sub_category, available_quantity, description } = toy[0];

    return (
        <div className="mt-20 md:mx-20 mx-5">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="md:w-1/2 md:border-r-2 md:border-gray-300">
                    {
                        picture ?
                            <img className="w-[500px] rounded-lg" src={picture} alt="" /> :
                            <div className="relative">
                                <img className="w-[500px] rounded-lg" src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                                <h3 className="text-2xl my-5 md:text-4xl text-center font-bold md:absolute top-16 left-24 bg-black text-[#f9bf00] px-4 py-2 rounded-md">No Image Found</h3>
                            </div>
                    }
                </div>
                <div className="md:w-1/2 flex flex-col gap-4 pl-10 mt-10 md:mt-0">
                    <h3 className="font-bold text-3xl text-[#f9bf00] md:text-5xl mb-7">{toy_name}</h3>
                    <h3 className="font-bold text-lg"><span className="text-[#f9bf00]">Seller Name:</span> {seller_name}</h3>
                    <h3 className="font-bold text-lg"><span className="text-[#f9bf00]">Sub Category:</span> {sub_category}</h3>
                    <h3 className="font-bold text-lg"><span className="text-[#f9bf00]">Price:</span> {price}</h3>
                    <h3 className="font-bold text-lg"><span className="text-[#f9bf00]">Available Quantity:</span> {available_quantity}</h3>
                    <h3 className="font-semibold text-md"><span className="text-[#f9bf00]">Description: </span> {description}</h3>
                </div>
            </div>
            <div className="flex justify-center mt-20 mb-20">
                <Link to='/allToys'><button className="btn-custom">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ToyDetails;