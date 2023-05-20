
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    }, [user])
    console.log(toys);
    return (
        <div className="mb-20">
            <h1 className="text-center my-16 text-5xl font-bold text-[#f9bf00]">My Toys</h1>
            <div className="mx-10">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <MyToysRow key={toy._id} toy={toy}></MyToysRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;