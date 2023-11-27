import propertyBg from '../assets/dashboardBg.jpg'
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import PropertyCard from '../Shared/PropertyCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

const AllProperty = () => {

    const [tabIdx, setTabIdx] = useState(0);
    const axiosPublic = useAxiosPublic();

    const { data: properties = [] } = useQuery({
        queryKey: ['verifiedProperty'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allVerifiedProperties');
            return res.data;
        }
    })

    const houses = properties.filter(property => property.category === "House");
    const apartments = properties.filter(property => property.category === "Apartment");
    const offices = properties.filter(property => property.category === "Office");
    const buildings = properties.filter(property => property.category === "Building");
    const condominiums = properties.filter(property => property.category === "Condominium");

    return (
        <div className='max-w-screen-xl mx-auto pt-20 px-5 lg:px-0'>
            <div style={{ backgroundImage: `url(${propertyBg})`, backgroundAttachment: 'fixed' }} className="text-white bg-no-repeat bg-cover py-5 md:py-10 lg::py-20 hidden md:block">
                <div className='bg-[#00000080] bg-blend-darken max-w-screen-xl mx-auto md:p-10'>
                    <h1 className="text-5xl lg:text-7xl text-center text-[#ffee00]">All Property</h1>
                </div>
            </div>
            <h1 className='text-2xl font-semibold text-center underline md:hidden pt-[20px] mb-5'>All Property</h1>
            <Tabs selectedTabClassName="bg-transparent text-green-600" defaultIndex={tabIdx} onSelect={(index) => setTabIdx(index)}>
                <TabList className="text-center font-semibold">
                    <Tab>All</Tab>
                    <Tab>Apartment</Tab>
                    <Tab>house</Tab>
                    <Tab>Office</Tab>
                    <Tab>Building</Tab>
                    <Tab>Condominium</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                        {
                            properties.map(property => <PropertyCard key={property._id} property={property} ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                        {
                            apartments.map(apartment => <PropertyCard key={apartment._id} property={apartment} ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                        {
                            houses.map(house => <PropertyCard key={house._id} property={house} ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                        {
                            offices.map(office => <PropertyCard key={office._id} property={office} ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                        {
                            buildings.map(building => <PropertyCard key={building._id} property={building} ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                        {
                            condominiums.map(condominium => <PropertyCard key={condominium._id} property={condominiums} ></PropertyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default AllProperty;