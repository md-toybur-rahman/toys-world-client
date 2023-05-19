import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";


const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div className="mb-20">
            <h1 className="text-center my-16 text-5xl font-bold text-[#f9bf00]">All Toys</h1>
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
                                toys.map(toy => <ToyRow key={toy._id} toy={toy}></ToyRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;