import { Link, useLocation } from "react-router-dom";


const ToyRow = ({ toy }) => {
    const { _id, toy_name, picture, price, seller_name, sub_category, available_quantity } = toy;
    const location = useLocation();
    return (
        <tr>
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
            <th>
                <Link to={`/toyDetails/${_id}`} state={{from: location}}><button className="btn btn-active btn-ghost btn-xs ml-4">Details</button></Link>

            </th>
        </tr>
    );
};

export default ToyRow;