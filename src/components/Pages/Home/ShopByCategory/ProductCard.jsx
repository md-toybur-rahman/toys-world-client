

const ProductCard = ({item}) => {
    const { picture, toy_name, price, rating } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-500 rounded-lg">
                <figure><img className="h-[300px] w-full" src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-start">
                        <button className="btn-custom">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;