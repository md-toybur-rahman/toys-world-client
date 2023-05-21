import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ScrollContext } from "../../Providers/ScrollProvider";
import useTitle from "../../../CustomHooks/useTitle";


const UpdateToy = () => {
    const scrollHandler = useContext(ScrollContext)
    const toy = useLoaderData();
    useTitle('Update Toy')
    const navigate = useNavigate();
    const { _id, toy_name, picture, price, description, sub_category, available_quantity, rating } = toy[0];
    const handleUpdateItem = event => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.toy_name.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const available_quantity = form.quantity.value;
        const picture = form.photo.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const updateToy = { toy_name, sub_category, price, available_quantity, picture, rating, description }

        fetch(`https://toys-world-server.vercel.app/updateToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${toy_name} Updated Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    scrollHandler();
                    navigate('/myToys');
                }
            })
    }
    return (
        <div className="mb-20">
            <div className="mt-10 border-2 border-[#f9bf00] w-2/3 mx-auto py-10 rounded-lg">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Update Toy - {toy_name}</h2>
                <div className="flex items-center justify-center ">
                    <form onSubmit={handleUpdateItem} className="flex flex-col gap-5 md:gap-10 justify-center">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Toy Name</span>
                                    </label>
                                    <label>
                                        <input type="text" name="toy_name" placeholder="Toy Name" defaultValue={toy_name} className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Sub Category</span>
                                    </label>
                                    <label>
                                        <select className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" id="" name="sub_category" required>
                                            <option value={sub_category? sub_category : "Chose One Category"} selected disabled hidden>{sub_category}</option>
                                            <option value="Bath">Teddy Bear</option>
                                            <option value="Plush">Horse</option>
                                            <option value="Puppet">Dogs</option>
                                            <option value="Puzzle">Cat</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Price</span>
                                    </label>
                                    <label>
                                        <input type="text" name="price" placeholder="Product Price" defaultValue={price} className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Available Quantity</span>
                                    </label>
                                    <label>
                                        <input type="text" name="quantity" defaultValue={available_quantity} placeholder="Available Quantity" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <div>
                                <label className="label">
                                    <span className="font-bold">Photo URL</span>
                                </label>
                                <label>
                                    <input type="text" name="photo" defaultValue={picture} placeholder="Photo URL" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" />
                                </label>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Rating</span>
                                    </label>
                                    <label>
                                        <input type="text" name="rating" placeholder="Product Rating" defaultValue={rating} className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="label">
                                    <span className="font-bold">Description</span>
                                </label>
                                <label>
                                    <input type="text" name="description" defaultValue={description} placeholder="Description" className="h-[50px] rounded-lg px-4 md:w-[740px] w-[280px]  bg-gray-200" />
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <input type="submit" className='btn-custom' value='Update Item' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;