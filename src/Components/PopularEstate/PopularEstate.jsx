import { MdLocationPin, MdOutlineVerified } from "react-icons/md";
import useAdvertisement from "../../hooks/useAdvertisement";
import { Link } from "react-router-dom";


const PopularEstate = () => {
    const [advertisement] = useAdvertisement();
    return (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
            <h1 className="text-3xl lg:text-5xl font-semibold my-10">Our choice of <br />
                popular real estate
            </h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                {
                    advertisement.map(property => <div key={property._id} className="p-4 flex w-full max-w-[26rem] flex-col justify-between rounded-xl bg-clip-border shadow-lg">
                        <div className=" h-[270px] overflow-hidden shadow-lg rounded-xl">
                            <img className='w-full h-full object-cover'
                                src={property.property_image}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col justify-between mt-3 space-y-4">
                            <div className="flex items-center justify-between">
                                <h5 className="font-sans text-xl font-medium">
                                    {property.property_title}
                                </h5>
                                <p className="flex items-center gap-1.5 font-sans text-green-700 ">
                                    <MdOutlineVerified className="text-xl "></MdOutlineVerified> verified
                                </p>
                            </div>
                            <div className="flex justify-between gap-4">
                                <p className="flex"><MdLocationPin className="text-xl"></MdLocationPin>{property.property_location}</p>
                                <p>$ ({property.price_range.lower_price} - {property.price_range.upper_price})</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Link to={`/propertyDetails/${property._id}`}>
                                <button className="w-full rounded-lg bg-yellow-500 py-3.5 px-7 text-center text-sm font-bold uppercase text-black hover:bg-green-500">
                                    Show details
                                </button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularEstate;