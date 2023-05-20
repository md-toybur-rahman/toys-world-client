import { Link, useLocation } from "react-router-dom";


const ProductCard = ({ item }) => {
    const { _id, picture, toy_name, price, rating } = item;
    const location = useLocation();
    return (
        <div>
            <div className="card w-52 md:w-96 bg-base-100 shadow-xl border-2 border-[#f9bf00] rounded-lg">
                <figure className="p-2">
                    {
                        picture ?
                            <img className="h-[170px] md:h-[300px] w-full rounded-lg" src={picture} alt="Shoes" /> :
                            <img className="h-[170px] md:h-[300px] w-full p-4" src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                    }
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/toyDetails/${_id}`} state={{from: location}}><button className="btn-custom">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;