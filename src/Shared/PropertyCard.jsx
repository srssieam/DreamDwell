import { MdLocationPin, MdOutlineVerified } from "react-icons/md";
import { Link } from "react-router-dom";


const PropertyCard = ({ property }) => {
    return (
        <div className="p-4 flex w-full max-w-[26rem] flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className=" h-[270px] overflow-hidden shadow-lg rounded-xl">
                <img className='w-full h-full object-cover'
                    src={property.property_image}
                    alt=""
                />
            </div>
            <div className="flex flex-col justify-between mt-3">
                <div className="flex items-center justify-between">
                    <h5 className="font-sans text-xl font-medium">
                        {property.property_title}
                    </h5>
                    <p className="flex items-center gap-1.5 font-sans text-green-700 ">
                        <MdOutlineVerified className="text-xl "></MdOutlineVerified> verified
                    </p>
                </div>
                <p className="flex"><MdLocationPin className="text-xl"></MdLocationPin>{property.property_location}</p>
                <p>{property.category}</p>
                <p className='mb-3'>$ ({property.price_range.lower_price} - {property.price_range.upper_price})</p>
                <div className='flex items-center gap-4'>
                    <img src={property.agent_image} className='w-11 h-11 object-cover rounded-full' alt="" />
                    <div className='text-center lg:text-left'>
                        <h3 className='text-xl font-semibold'>{property.agent_name}</h3>
                    </div>
                </div>

            </div>
            <div className="mt-2">
                <Link to={`/propertyDetails/${property._id}`}>
                    <button className="w-full rounded-lg bg-green-600 py-3.5 px-7 text-center text-sm font-bold uppercase text-white hover:bg-green-500">
                        Show details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;