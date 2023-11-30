import { MdLocationPin } from "react-icons/md";
import useWishlist from "../hooks/useWishlist";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyWishlist = () => {
    const [wishlist, refetch] = useWishlist();
    const axiosSecure = useAxiosSecure();

    const handleRemove = (property) =>{
        console.log('property removed from wishlist', property)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/wishlist/${property._id}`)
                    .then(res => {
                        // console.log(res.data);
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Property has been removed from wishlist.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="lg:px-5">
            <Helmet>
                <title>DreamDwell | My wishlist</title>
            </Helmet>
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">My Wishlist</h1>
            <div className="mb-4">
                <p className="text-lg ">Total properties: {wishlist.length}</p>
            </div>
            <div className=" grid md:grid-cols-2 gap-6 mb-7">
                {
                    wishlist.map(property => <div key={property._id} className="grid md:grid-cols-2 gap-3 border border-green-700">
                        <img src={property.property_image} className='h-[180px] md:h-[250px] w-full object-cover' alt="" />
                        <div className='space-y-2 px-2 md:px-0 h-full flex flex-col justify-between py-2'>
                            <h5 className="font-sans font-medium">
                                {property.property_title}
                            </h5>
                            <p className="flex text-sm"><MdLocationPin className="text-xl"></MdLocationPin>{property.property_location}</p>
                            <div className='flex items-center gap-4'>
                                <img src={property.agent_image} className='w-11 h-11 object-cover rounded-full' alt="" />
                                <div className='text-center lg:text-left'>
                                    <h3 className='text-sm'>{property.agent_name}</h3>
                                </div>
                            </div>
                            <p className="text-sm">$ ({property.price_range.lower_price} - {property.price_range.upper_price})</p>
                            <div className="flex gap-3">
                                <button onClick={()=> handleRemove(property)} className="p-1 lg:p-2 rounded-md hover:bg-red-500 text-sm text-white bg-red-700">Remove</button>
                                <Link to={`/dashboard/offerPage/${property._id}`}>
                                    <button className="p-1 lg:p-2 rounded-md hover:bg-blue-500 text-sm text-white bg-blue-700">Make an Offer</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyWishlist;