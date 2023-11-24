
import Swal from 'sweetalert2';
import contactBg from '../../assets/contactBg.jpg'

const Enquiry = () => {
    const handleEnquiry=(e)=>{
        e.preventDefault();
        e.target.reset();
        Swal.fire({
            title: "Enquiry Added!",
            text: "Your Enquiry added Successfully!",
            icon: "success"
          });
    }
    return (
        <div>
            <div style={{ backgroundImage: `url(${contactBg})`, backgroundAttachment: 'fixed' }} className="text-white bg-no-repeat bg-cover w-full">
                <div className=" bg-[#00000080] bg-blend-darken max-w-screen-xl mx-auto p-10 grid lg:grid-cols-2 gap-7">
                    <div className='flex flex-col justify-center space-y-5'>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-[#ffee00]'>Discover a new way of living</h1>
                        <p className='text-lg md:text-2xl text-white'>Have questions or looking to inquire about a property? Our dedicated team is here to
                            assist you. Whether it's about available listings, property details, or scheduling
                            a viewing, we're committed to providing swift and informative responses. Fill out the
                            form below, and let us help you find your ideal home.
                        </p>
                    </div>

                    <div className=' h-full flex items-center bg-transparent backdrop-blur-xl p-4 md:p-6 lg:p-11 rounded-3xl'>
                        <div className='w-full'>
                            <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold py-2 md:py-3 lg:py-7 text-white'>Make an enquiry</h1>
                            <form onSubmit={handleEnquiry} className='space-y-3 lg:space-y-8'>
                                <div>
                                    <label htmlFor="name" className=' text-white font-semibold text-lg lg:text-2xl'>Your Name* : </label><br />
                                    <div className='flex items-center border-b-2 border-[#ffee00]'>
                                        <input type="text" name="text" id="text" className='text-white outline-none bg-transparent w-full px-2 py-1' required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className=' text-white font-semibold text-lg lg:text-2xl'>Your Email* : </label><br />
                                    <div className='flex items-center border-b-2 border-[#ffee00]'>
                                        <input type="email" name="email" id="email" className='text-white outline-none bg-transparent w-full px-2 py-1' required />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className=' text-white font-semibold text-lg lg:text-2xl'>Your Phone* : </label><br />
                                    <div className='flex items-center border-b-2 border-[#ffee00]'>
                                        <input type="tel" name="phone" id="phone" className='text-white outline-none bg-transparent w-full px-2 py-1' required />

                                    </div>
                                </div>
                                <div>
                                    <input type="submit" value="Make an enquiry" className='btn text-xl my-5 bg-slate-900 normal-case font-semibold text-[#ffee00] hover:border-[#ffee00]' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enquiry;