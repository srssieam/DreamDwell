import { Link, NavLink } from "react-router-dom";
import './NavbarStyle.css'
import logo from '../../assets/logo.png'
import { FiUser } from "react-icons/fi";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { IoMdLogOut } from "react-icons/io";
import Swal from "sweetalert2";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { user, logOut } = useAuth();

    const handleLogout = () =>{
        logOut()
            .then(()=>{
                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been logged out successfully.",
                    icon: "success"
                  });
            })
    }

    const handleDashboard = () =>{
        if(!user){
            Swal.fire({
                title: "Access Denied",
                text: "Please login to access this page.",
                icon: "warning"
              });
        }
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allProperty'>All Property</NavLink></li>
        <li onClick={handleDashboard}><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li onClick={handleLogout} className='text-[#54dd42] ml-4 md:hidden'>Logout |-</li>
    </>
    return (
        <div className='fixed z-20 bg-black w-full'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <details className="dropdown">
                            <summary onClick={()=>setMenuOpen(!menuOpen)} className="btn btn-ghost lg:hidden">
                                {
                                    menuOpen ? <FaXmark className="text-white text-xl"></FaXmark>
                                    :<FaBars className="text-white text-xl"></FaBars> 
                                }                                
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content mt-3 z-[1] text-xl bg-black text-white rounded-box w-52">
                                {navLinks}
                            </ul>
                        </details>
                        <Link to='/' className="flex items-center">
                            <img src={logo} alt="logo" className="w-12 h-12 lg:w-16 lg:h-16" />
                            <div>
                                <h3 className="lg:text-xl font-semibold text-[#54dd42]">Dream<span className="text-[#ffee00]">Dwell</span></h3>
                                <p className="text-gray-300">Real estate</p>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" flex gap-6 px-2 font-handlee text-xl">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {
                            user ? < div className="flex flex-row">
                                    <li onClick={handleLogout} className=' list-none hidden md:flex items-center gap-2 lg:text-lg text-[#54dd42] hover:text-[#ffee00] cursor-pointer mr-4'><IoMdLogOut></IoMdLogOut> Logout</li>
                                    <div className="flex-col md:flex items-center justify-center">
                                    {
                                        user?.photoURL && <img src={user.photoURL} alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3"/>
                                    }
                                    {
                                        user?.displayName && <p className="text-[#ffee00]">{user.displayName}</p>
                                    }
                                    </div>
                                    </div>
                            :
                            <li className=' list-none'><NavLink to='/login' className='flex items-center gap-2 lg:text-lg mr-4 text-[#54dd42]'><FiUser></FiUser>Login</NavLink></li>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;