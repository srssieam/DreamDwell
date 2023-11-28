import { NavLink, Outlet } from 'react-router-dom';
import dashboardBg from '../assets/dashboardBg.jpg'
import { FaRectangleList, FaUsers, FaHouseCircleCheck, FaHouseCircleExclamation } from 'react-icons/fa6';
import { TbStarsFilled } from 'react-icons/tb';
import { MdDashboardCustomize, MdOutlineArrowBack, MdOutlineFavorite } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsFillHouseAddFill } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";

const Dashboard = () => {
    const isAdmin = false;
    const isAgent = true;
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div style={{ backgroundImage: `url(${dashboardBg})`, backgroundAttachment: 'fixed' }} className="text-white bg-no-repeat bg-cover py-5 md:py-10 lg::py-20 hidden md:block">
                <div className='bg-[#00000080] bg-blend-darken max-w-screen-xl mx-auto md:p-10'>
                    <h1 className="text-5xl lg:text-7xl text-center text-[#ffee00]">Dashboard</h1>
                </div>
            </div>
            <div className="drawer lg:drawer-open p-4 lg:p-0">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="text-4xl text-green-600 drawer-button lg:hidden"><MdDashboardCustomize></MdDashboardCustomize></label>
                    <h1 className='text-2xl font-semibold text-center underline md:hidden'>Dashboard</h1>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-2 md:p-4 w-56 md:w-80 min-h-full bg-black md:text-lg space-y-3 ">
                        {
                            isAdmin ?
                               
                                <>
                                    <li><NavLink to="/dashboard/adminProfile"><CgProfile className="text-2xl"></CgProfile> Admin Profile</NavLink></li>
                                    <li><NavLink to="/dashboard/manageProperties"><FaRectangleList className="text-2xl"></FaRectangleList> Manage Properties</NavLink></li>
                                    <li><NavLink to="/dashboard/manageUsers"><FaUsers className="text-2xl"></FaUsers> Manage Users</NavLink></li>
                                    <li><NavLink to="/dashboard/manageReviews"><TbStarsFilled className="text-2xl"></TbStarsFilled> Manage Reviews</NavLink></li>
                                    <li><NavLink to="/dashboard/advertise"><RiAdvertisementLine className="text-2xl"></RiAdvertisementLine> Advertise Property</NavLink></li>
                                </>
                                : isAgent ?   
                                <>
                                    <li><NavLink to="/dashboard/agentProfile"><CgProfile className="text-2xl"></CgProfile> Agent Profile</NavLink></li>
                                    <li><NavLink to="/dashboard/mySoldProperties"><FaHouseCircleCheck className="text-2xl"></FaHouseCircleCheck> My Sold Properties</NavLink></li>
                                    <li><NavLink to="/dashboard/myAddedProperties"><BsFillHouseAddFill className="text-2xl"></BsFillHouseAddFill> My Added Properties</NavLink></li>
                                    <li><NavLink to="/dashboard/myRequestedProperties"><FaHouseCircleExclamation className="text-2xl"></FaHouseCircleExclamation> My Requested Properties</NavLink></li>
                                </>
                                :     
                                <>
                                    <li><NavLink to="/dashboard/userProfile"><CgProfile className="text-2xl"></CgProfile> My Profile</NavLink></li>
                                    <li><NavLink to="/dashboard/wishlist"><MdOutlineFavorite className="text-2xl"></MdOutlineFavorite> Wishlist</NavLink></li>
                                    <li><NavLink to="/dashboard/propertyBought"><FaHouseCircleCheck className="text-2xl"></FaHouseCircleCheck> Property Bought</NavLink></li>
                                    <li><NavLink to="/dashboard/myReviews"><TbStarsFilled className="text-2xl"></TbStarsFilled> My Reviews</NavLink></li>
                                </>
                        }
                <hr className='border-green-400' />
                {/* common sidebar */}
                <>
                    <li><NavLink to="/"><MdOutlineArrowBack className="text-2xl"></MdOutlineArrowBack> Back to Home</NavLink></li>
                </>
                </ul>
            </div>
        </div>
        </div >
    );
};

export default Dashboard;