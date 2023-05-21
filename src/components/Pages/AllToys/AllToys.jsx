import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import useTitle from "../../../CustomHooks/useTitle";
import { useState } from "react";


const AllToys = () => {
    const loadedToys = useLoaderData();
    const [toys, setToys] = useState(loadedToys);
    const [active, setActive] = useState(false)
    useTitle('All Toys');
    const handleShowAll = () => {
        fetch('https://toys-world-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setActive(true);
            })
    }
    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = (form.search.value).toLowerCase();
        console.log(search);
        fetch('https://toys-world-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(toy => (toy.toy_name).toLowerCase().includes(search));
                setToys(filter);
            })
    }
    return (
        <div className="mb-20">
            <h1 className="text-center mt-16 mb-8 text-5xl font-bold text-[#f9bf00]">All Toys</h1>
            <div className="mx-10">
                <div className="flex justify-end mb-10 mr-20">
                    <div className="form-control">
                        <form onSubmit={handleSearch} className="input-group">
                            <input type="text" placeholder="Search…" name="search" className="input border-1 border-gray-500 outline-none" />
                            <button type="submit" className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
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

                    <div className="flex justify-center mt-10">
                        <button onClick={handleShowAll} className={`btn-custom ${active ? 'hidden' : ''} ${toys.length < 20 ? 'hidden': 'block'}`}>Show all</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToys;