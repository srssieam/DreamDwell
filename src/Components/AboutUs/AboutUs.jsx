import { Helmet } from "react-helmet-async";
import aboutBg from "../../assets/aboutBg.jpg"
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"

const AboutUs = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-20 px-5 lg:px-0'>
            <Helmet>
                <title>DreamDwell | About us</title>
            </Helmet>
            <div style={{ backgroundImage: `url(${aboutBg})`, backgroundAttachment: 'fixed' }} className="text-white bg-no-repeat bg-cover py-5 md:py-10 lg::py-20 hidden md:block">
                <div className='bg-[#00000080] bg-blend-darken max-w-screen-xl mx-auto md:p-10'>
                    <h1 className="text-5xl lg:text-7xl text-center text-[#ffee00]">About us</h1>
                </div>
            </div>
            <div className="grid gap-7 md:gap-10 lg:gap-24 lg:grid-cols-2 my-6 lg:my-10">
                <div>
                    <img src={about1} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="font-bold my-5 text-2xl md:text-4xl text-green-800">
                        About DreamDwell
                    </h1>
                    <p className="text-justify">
                        "Welcome to DreamDwell, where we believe in transforming dreams into
                        addresses. With a legacy of 4 years in the real estate industry,
                        we stand as pillars of trust, integrity, and excellence. <br />
                        At DreamDwell, we understand that finding the perfect
                        home or investment property isn't just about bricks and mortar;
                        it's about understanding dreams, aspirations, and the significance
                        of 'home.' Our dedicated team of seasoned professionals strives
                        relentlessly to match your unique needs with the ideal property. <br />
                        Our commitment to you extends beyond a mere transaction.
                        We're here to guide, support, and simplify the complex process of
                        buying, selling, or investing in real estate. Whether you're a first-time
                        homebuyer, a seasoned investor, or seeking to sell your property,
                        we provide tailored solutions that prioritize your goals and preferences.
                    </p>
                </div>
            </div>
            <div className="grid gap-7 md:gap-10 lg:gap-24 lg:grid-cols-2 my-6 lg:my-10">
                <div>
                    <img src={about2} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="font-bold my-5 text-2xl md:text-4xl text-green-800">
                    Our Vision. Our Feel For Good Offers.
                    </h1>
                    <p className="text-justify">
                        "Vision drives us at DreamDwell. Our mission is simple: to redefine the real estate
                        experience by blending expertise with a genuine 'feel-good'
                        factor in every offer we bring to the table.<br />
                        At the heart of our vision lies a dedication to
                        curating not just properties, but lifestyles. We
                        strive to understand your needs, desires, and aspirations,
                        ensuring that every offer we present resonates with
                        your unique vision of 'home.' <br />
                        Our commitment to 'feel-good' offers isn't just about finding a
                        property; it's about creating an experience that instills
                        confidence, joy, and satisfaction. We believe that the right
                        offer should not only meet your criteria but also exceed your expectations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;