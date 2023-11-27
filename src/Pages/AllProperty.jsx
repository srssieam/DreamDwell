import { MdLocationPin, MdOutlineVerified } from 'react-icons/md';
import propertyBg from '../assets/dashboardBg.jpg'
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const AllProperty = () => {

    const axiosPublic = useAxiosPublic();

    const { data: properties = [] } = useQuery({
        queryKey: ['verifiedProperty'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allVerifiedProperties');
            return res.data;
        }
    })

    return (
        <div className='max-w-screen-xl mx-auto pt-20 px-5 lg:px-0'>
            <div style={{ backgroundImage: `url(${propertyBg})`, backgroundAttachment: 'fixed' }} className="text-white bg-no-repeat bg-cover py-5 md:py-10 lg::py-20 hidden md:block">
                <div className='bg-[#00000080] bg-blend-darken max-w-screen-xl mx-auto md:p-10'>
                    <h1 className="text-5xl lg:text-7xl text-center text-[#ffee00]">All Property</h1>
                </div>
            </div>
            <h1 className='text-2xl font-semibold text-center underline md:hidden pt-[20px] mb-5'>All Property</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
                {
                    properties.map(property => <div key={property._id} className="p-4 flex w-full max-w-[26rem] flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
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
                    </div>)
                }

            </div>
        </div>
    );
};

export default AllProperty;