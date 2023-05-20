import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {
    const toy = useLoaderData()
    const { toy_name, picture, price, seller_name, sub_category, available_quantity } = toy[0];
    const handleAddItem = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const seller_name = form.seller_name.value;
        const toy_name = form.toy_name.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const available_quantity = form.quantity.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const newToy = { email, seller_name, toy_name, sub_category, price, available_quantity, photo, description }
        console.log(email, seller_name, toy_name, sub_category, price, available_quantity, photo);
        fetch('https://toys-world-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Created successfully')
                }
            })
    }
    return (
        <div className="mb-20">
            <div className="mt-10 border-2 border-[#f9bf00] w-2/3 mx-auto py-10 rounded-lg">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Update Toy - {toy_name}</h2>
                <div className="flex items-center justify-center ">
                    <form onSubmit={handleAddItem} className="flex flex-col gap-5 md:gap-10 justify-center">
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
                                        {/* <input type="text" name="sub_category" placeholder="Sub Category" defaultValue={sub_category} className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required /> */}
                                        <select className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" id="" name="sub_category" required>
                                            <option value={sub_category} selected disabled hidden>{sub_category}</option>
                                            <option value="Bath">Bath</option>
                                            <option value="Plush">Plush</option>
                                            <option value="Puppet">Puppet</option>
                                            <option value="Puzzle">Puzzle</option>
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
                                        <input type="text" name="price" placeholder="Product Price" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Available Quantity</span>
                                    </label>
                                    <label>
                                        <input type="text" name="quantity" placeholder="Available Quantity" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
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
                        <div>
                            <div>
                                <label className="label">
                                    <span className="font-bold">Description</span>
                                </label>
                                <label>
                                    <input type="text" name="description" placeholder="Description" className="h-[50px] rounded-lg px-4 md:w-[740px] w-[280px]  bg-gray-200" />
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

export default UpdateToy;