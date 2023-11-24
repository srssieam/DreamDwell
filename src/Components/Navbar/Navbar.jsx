import { Link, NavLink } from "react-router-dom";
import './NavbarStyle.css'
import logo from '../../assets/logo.png'
import { FiUser } from "react-icons/fi";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allProperty'>Property</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
    return (
        <div className='fixed z-20 bg-black w-full'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <details onClick={()=>setMenuOpen(!menuOpen)} className="dropdown">
                            <summary className="btn btn-ghost lg:hidden">
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
                        <li className=' list-none'><NavLink to='/login' className='flex items-center gap-2 mr-4 text-[#54dd42]'><FiUser></FiUser>Login</NavLink></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;