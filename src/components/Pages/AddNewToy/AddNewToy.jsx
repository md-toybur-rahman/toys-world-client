import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const AddNewToy = () => {
    const { user, loading } = useContext(AuthContext);
    const handleAddItem = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const seller_name = form.seller_name.value;
        const toy_name = form.toy_name.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        console.log(email, seller_name, toy_name, sub_category, price, quantity, photo);
    }




    if (loading) {
        return <h2>Loading...........</h2>
    }
    return (
        <div className="mb-20">
            <div className="mt-10 border-2 border-[#f9bf00] w-2/3 mx-auto py-10 rounded-lg">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Add New Toy</h2>
                <div className="flex items-center justify-center ">
                    <form onSubmit={handleAddItem} className="flex flex-col gap-5 md:gap-10 justify-center">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Your Email</span>
                                    </label>
                                    <label>
                                        <input type="email" name="email" placeholder="Your Email" defaultValue={user.email} className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Seller Name</span>
                                    </label>
                                    <label>
                                        <input type="text" name="seller_name" placeholder="Seller Name" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Toy Name</span>
                                    </label>
                                    <label>
                                        <input type="text" name="toy_name" placeholder="Toy Name" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Sub Category</span>
                                    </label>
                                    <label>
                                        <input type="text" name="sub_category" placeholder="Sub Category" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required/>
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
                                        <input type="text" name="price" placeholder="Product Price" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required/>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Available Quantity</span>
                                    </label>
                                    <label>
                                        <input type="text" name="quantity" placeholder="Available Quantity" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required/>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="label">
                                    <span className="font-bold">Photo URL</span>
                                </label>
                                <label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="h-[50px] rounded-lg px-4 md:w-[740px] w-[280px]  bg-gray-200" />
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <input type="submit" className='btn-custom' value='Add Item' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewToy;