import { Link, useLocation } from "react-router-dom";
import { ScrollContext } from "../../Providers/ScrollProvider";
import { useContext } from "react";


const MyToysRow = ({ toy, handleDelete }) => {
    const scrollHandler = useContext(ScrollContext)
    const { _id, toy_name, picture, price, seller_name, sub_category, available_quantity } = toy;
    const location = useLocation();
    
    return (
        <tr data-aos="fade-right" data-aos-duration="1000" className="border-b-2 ">
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                picture ?
                                    <img src={picture} alt={toy_name} /> :
                                    <img src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toy_name}</div>
                    </div>
                </div>
            </td>
            <td>
                {seller_name}
            </td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td className="pl-20">{available_quantity}</td>
            <td className="flex items-center justify-center mt-3">               
                <Link to={`/toyDetails/${_id}`} state={{from: location}}><button onClick={scrollHandler} className="btn btn-active btn-ghost btn-xs ml-4">Details</button></Link>
                <Link to={`/updateToy/${_id}`}><button className="btn btn-warning btn-xs ml-4">Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-xs ml-4">Delete</button>
            </td>
        </tr>
    );
};

export default MyToysRow;