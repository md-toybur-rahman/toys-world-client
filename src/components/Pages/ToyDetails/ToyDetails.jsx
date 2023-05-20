

const ToyDetails = ({ toy }) => {
    const { toy_name, picture, price, seller_name, sub_category, available_quantity } = toy;

    return (
        <div>
            <img className="w-[300px] rounded-lg" src={picture} alt="" />
            <h3 className="font-bold text-lg">Toy Name: {toy_name}</h3>
            <h3 className="font-bold text-lg">Seller Name: {seller_name}</h3>
            <h3 className="font-bold text-lg">Sub Category: {sub_category}</h3>
            <h3 className="font-bold text-lg">Price: {price}</h3>
            <h3 className="font-bold text-lg">Available Quantity: {available_quantity}</h3>
        </div>
    );
};

export default ToyDetails;