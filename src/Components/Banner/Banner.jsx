import bgVideo from '../../assets/bgVideo.mp4'
import house from '../../assets/house.png'
import building from '../../assets/building.png'
import condominium from '../../assets/condominium.png'
import home from '../../assets/home.png'
import office from '../../assets/office.png'

const Banner = () => {
    return (
        <div className='relative h-[100vh]'>
            <video className='w-full h-full absolute top-0 object-cover  -z-10' autoPlay loop muted>
                <source src={bgVideo} type='video/mp4' />
            </video>
            <div className='bg-[#0000006e] w-full h-[100vh] absolute z-10 flex items-center'>
                <div className='max-w-screen-xl mx-auto text-center px-6 lg:px-0'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white font-serif mt-28'>Unlock Your Dream Home Here</h1>
                    <div className='flex flex-wrap justify-center my-4 md:my-7'>
                        <div className='flex flex-col items-center md:border-r p-3 md:p-none md:px-7 md:border-r-green-500 cursor-pointer transition 1s hover:scale-110'>
                            <img src={house} className='w-9 h-9 md:w-14 md:h-14' alt="" />
                            <h3 className=' text-yellow-400'>Apartment</h3>
                        </div>
                        <div className='flex flex-col items-center md:border-r p-3 md:p-none md:px-7 md:border-r-green-500 cursor-pointer transition 1s hover:scale-110'>
                            <img src={building} className='w-9 h-9 md:w-14 md:h-14' alt="" />
                            <h3 className=' text-yellow-400'>Building</h3>
                        </div>
                        <div className='flex flex-col items-center md:border-r p-3 md:p-none md:px-7 md:border-r-green-500 cursor-pointer transition 1s hover:scale-110'>
                            <img src={condominium} className='w-9 h-9 md:w-14 md:h-14' alt="" />
                            <h3 className=' text-yellow-400'>Condominium</h3>
                        </div>
                        <div className='flex flex-col items-center md:border-r p-3 md:p-none md:px-7 md:border-r-green-500 cursor-pointer transition 1s hover:scale-110'>
                            <img src={home} className='w-9 h-9 md:w-14 md:h-14' alt="" />
                            <h3 className=' text-yellow-400'>House</h3>
                        </div>
                        <div className='flex flex-col items-center p-3 md:p-none md:px-7 cursor-pointer transition 1s hover:scale-110'>
                            <img src={office} className='w-9 h-9 md:w-14 md:h-14' alt="" />
                            <h3 className=' text-yellow-400'>Office</h3>
                        </div>
                    </div>

                    <div className="stats bg-transparent stats-vertical lg:stats-horizontal">
                        <div className="stat place-items-center">
                            <div className="stat-value text-[#ffee00]">1500+</div>
                            <div className="stat-title text-white">Ready Property</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-value text-[#ffee00]">700+</div>
                            <div className="stat-title text-white">Happy Customers</div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <div className="join">
                            <button className="btn btn-outline text-yellow-500 hover:bg-black hover:text-yellow-500 text-xl join-item">Buy</button>
                            <button className="btn btn-outline text-yellow-500 hover:bg-black hover:text-yellow-500 text-xl join-item">Rent</button>
                            <button className="btn btn-outline text-yellow-500 hover:bg-black hover:text-yellow-500 text-xl join-item">Sell</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;