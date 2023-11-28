import { MdLocationPin } from "react-icons/md";
import useWishlist from "../hooks/useWishlist";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";


const MyWishlist = () => {
    const [wishlist, refetch] = useWishlist();

    const handleRemove = (property) =>{
        console.log('property removed from wishlist', property)
    }
    return (
        <div className="lg:px-5">
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