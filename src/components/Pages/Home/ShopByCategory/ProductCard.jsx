import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScrollContext } from "../../../Providers/ScrollProvider";
import { Rating } from '@smastrom/react-rating'
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";




const ProductCard = ({ item }) => {
    const scrollHandler = useContext(ScrollContext)
    const { _id, picture, toy_name, price, rating } = item;
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUser = () => {
        if (!user) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Please Login',
                text: "You have to log in first to view details",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Login',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })
        }
    }

    return (
        <div data-aos="zoom-in" data-aos-duration="1000">
            <div className="card w-52 md:w-96 bg-base-100 shadow-xl border-2 border-[#f9bf00] rounded-lg">
                <figure className="p-2">
                    {
                        picture ?
                            <img className="h-[170px] md:h-[300px] w-full rounded-lg" src={picture} alt="Shoes" /> :
                            <img className="h-[170px] md:h-[300px] w-full p-4" src="https://i.ibb.co/KxN1BZH/kindpng-3765565-1.png" alt="" />
                    }
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Price: {price}</p>
                    <div className='flex-grow-1 d-flex align-items-center my-3 text-muted'>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(rating || 0)} readOnly
                        />
                        <span className='ms-2'>{rating}</span>
                    </div>
                    <div className="card-actions justify-start">
                        <Link onClick={handleUser} to={`/toyDetails/${_id}`} state={{ from: location }}><button onClick={scrollHandler} className="btn-custom">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;