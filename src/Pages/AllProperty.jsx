import propertyBg from '../assets/dashboardBg.jpg'
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import PropertyCard from '../Shared/PropertyCard';

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
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9 md:my-20'>
                {
                    properties.map(property => <PropertyCard key={property._id} property={property} ></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default AllProperty;