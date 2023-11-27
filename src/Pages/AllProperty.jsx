import propertyBg from '../assets/dashboardBg.jpg'
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import PropertyCard from '../Shared/PropertyCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';

const AllProperty = () => {

    const [tabIdx, setTabIdx] = useState(0);
    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState('');

    const { data: properties = [] } = useQuery({
        queryKey: ['verifiedProperty', search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allVerifiedProperties?search=${search}`);
            return res.data;
        }
    })

    const houses = properties.filter(property => property.category === "House");
    const apartments = properties.filter(property => property.category === "Apartment");
    const offices = properties.filter(property => property.category === "Office");
    const buildings = properties.filter(property => property.category === "Building");
    const condominiums = properties.filter(property => property.category === "Condominium");

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
        e.target.reset();
    }

    return (
        <div className='max-w-screen-xl mx-auto pt-20 px-5 lg:px-0'>
            <div style={{ backgroundImage: `url(${propertyBg})`, backgroundAttachment: 'fixed' }} className="text-white bg-no-repeat bg-cover py-5 md:py-10 lg::py-20 hidden md:block">
                <div className='bg-[#00000080] bg-blend-darken max-w-screen-xl mx-auto md:p-10'>
                    <h1 className="text-5xl lg:text-7xl text-center text-[#ffee00]">All Property</h1>
                </div>
            </div>
            <h1 className='text-2xl font-semibold text-center underline md:hidden pt-[20px] mb-5'>All Property</h1>
            <div className="flex justify-center my-6">
                <form onSubmit={handleSearch}>
                    <fieldset className="form-control lg:w-80">
                        <div className="relative">
                            <input type="text" placeholder="Search property" name='search' className="input border border-[#1c691c] w-full" />
                            <button type="submit" className="btn bg-[#1c691c] hover:bg-[#389238] text-[#ffa600] border-none absolute top-0 right-0 rounded-l-none text-xl"><ImSearch></ImSearch></button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <Tabs selectedTabClassName="bg-transparent text-green-600 underline"
                defaultIndex={tabIdx}
                onSelect={(index) => {
                    setTabIdx(index)
                    setSearch('')
                }}>
                <TabList className="text-center flex flex-wrap justify-center gap-6 font-semibold">
                    <Tab className="hover:text-green-600 cursor-pointer">All</Tab>
                    <Tab className="hover:text-green-600 cursor-pointer">Apartment</Tab>
                    <Tab className="hover:text-green-600 cursor-pointer">house</Tab>
                    <Tab className="hover:text-green-600 cursor-pointer">Office</Tab>
                    <Tab className="hover:text-green-600 cursor-pointer">Building</Tab>
                    <Tab className="hover:text-green-600 cursor-pointer">Condominium</Tab>
                </TabList>
                <TabPanel>
                    {
                        properties.length > 0 ?
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                                {
                                    properties.map(property => <PropertyCard key={property._id} property={property} ></PropertyCard>)
                                }
                            </div>
                            :
                            <div className='text-5xl font-semibold min-h-[50vh] flex justify-center items-center'>
                                <h1>Property not found</h1>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        properties.length > 0 ?
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                                {
                                    apartments.map(apartment => <PropertyCard key={apartment._id} property={apartment} ></PropertyCard>)
                                }
                            </div>
                            :
                            <div className='text-5xl font-semibold min-h-[50vh] flex justify-center items-center'>
                                <h1>Apartment not found</h1>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        properties.length > 0 ?
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                                {
                                    houses.map(house => <PropertyCard key={house._id} property={house} ></PropertyCard>)
                                }
                            </div>
                            :
                            <div className='text-5xl font-semibold min-h-[50vh] flex justify-center items-center'>
                                <h1>House not found</h1>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        properties.length > 0 ?
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                                {
                                    offices.map(office => <PropertyCard key={office._id} property={office} ></PropertyCard>)
                                }
                            </div>
                            :
                            <div className='text-5xl font-semibold min-h-[50vh] flex justify-center items-center'>
                                <h1>Office not found</h1>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        properties.length > 0 ?
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                                {
                                    buildings.map(building => <PropertyCard key={building._id} property={building} ></PropertyCard>)
                                }
                            </div>
                            :
                            <div className='text-5xl font-semibold min-h-[50vh] flex justify-center items-center'>
                                <h1>building not found</h1>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        properties.length > 0 ?
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-9'>
                                {
                                    condominiums.map(condominium => <PropertyCard key={condominium._id} property={condominium} ></PropertyCard>)
                                }
                            </div>
                            :
                            <div className='text-5xl font-semibold min-h-[50vh] flex justify-center items-center'>
                                <h1>Condominium not found</h1>
                            </div>
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default AllProperty;