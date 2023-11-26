
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './ReviewStyles.css'


// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';


// import { useEffect, useState } from 'react';
// import useAxiosPublic from '../../hooks/useAxiosPublic';

import useReviews from '../../hooks/useReviews';

const Review = () => {
    const [reviews] = useReviews()
    // const [reviews, setReviews] = useState([]);
    // const axiosPublic = useAxiosPublic();

    // useEffect(() => {
    //     axiosPublic.get('/reviews')
    //         .then(res=> {
    //             console.log(res.data)
    //             setReviews(res.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [axiosPublic])
    
    return (
        <div className="max-w-screen-xl mx-auto my-16 px-6 lg:px-0">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-10">See what others<br />
                said about us
            </h1>
            <div className='my-14'>
                <Swiper
                    slidesPerView={2}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 10
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 100
                        }
                      }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={100}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Grid, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review, idx) => {
                            return (
                                <SwiperSlide key={idx} className=''>
                                    <div className='flex flex-col justify-center items-center lg:flex-row gap-4'>
                                        <img src={review.image} className='w-20 h-20 object-cover rounded-full' alt="" />
                                        <div className='text-center lg:text-left'>
                                            <h3 className='text-2xl font-semibold'>{review.reviewer_name}</h3>
                                            <p className='text-[#368a2b]'>{review.property_title}</p>
                                            <p className='text-lg text-justify'>{review.review_description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Review;