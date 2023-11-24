import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import Swal from "sweetalert2";


const Footer = () => {
    const handleSubscribe = e =>{
        e.preventDefault();
        Swal.fire(
            'Subscription successful!',
            'Stay tuned for the latest updates and property news.',
            'success'
        )
        e.target.reset();

    }
    return (
        <div className=' w-full bg-black lg:py-20'>
            <footer className="footer p-10 max-w-[1250px] mx-auto text-gray-400 bottom-0">
                <aside>
                    <Link to='/' className="flex items-center">
                        <img src={logo} alt="logo" className="w-12 h-12 lg:w-16 lg:h-16" />
                        <div>
                            <h3 className="lg:text-xl font-semibold text-[#54dd42]">Dream<span className="text-[#ffee00]">Dwell</span></h3>
                            <p className="text-gray-300">Real estate</p>
                        </div>
                    </Link>
                    <div className="">
                        <p>Discover your perfect space with us. <br /> 
                        Explore curated listings,
                             connect with expert advisors, <br /> and start your journey towards
                              finding the home <br /> that fits your lifestyle. Your dream home awaits.
                        </p>
                    </div>
                </aside>
                <nav className='lg:text-lg'>
                    <header className="footer-title text-[#ffee00]">Contact Us</header>
                    <p className="link link-hover">Staten Island, NY 10314, USA</p>
                    <p className="link link-hover">01311XXXXXX</p>
                    <p className="link link-hover">01789XXXXXX</p>
                    <p className="link link-hover">dreamdwell@yahoo.com</p>
                </nav>
                <form onSubmit={handleSubscribe}>
                    <header className="footer-title text-xl text-[#ffee00]">Newsletter</header>
                    <fieldset className="form-control lg:w-80">
                        <label className="label">
                            <span className="">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="email" placeholder="username@site.com" className="input border border-[#ffee00] w-full" required />
                            <button type='submit' className="btn bg-[#ffee00] text-black border-none absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;