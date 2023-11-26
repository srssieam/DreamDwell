import useReviews from "../hooks/useReviews";


const ManageReviews = () => {
    const [reviews] = useReviews()
    return (
        <div className="px-5">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Manage All Reviews</h1>
            <p className="text-lg mb-4">Total Reviews: {reviews.length}</p>
            <div className="border-2 border-green-700 p-4 grid md:grid-cols-2 gap-6">
                {
                    reviews.map((review, idx) => <div key={idx} className="p-4 border">
                        <div className='flex flex-col justify-center items-center lg:flex-row gap-4'>
                            <img src={review.image} className='w-20 h-20 object-cover rounded-full' alt="" />
                            <div className='text-center lg:text-left'>
                                <h3 className='text-xl font-semibold'>{review.reviewer_name}</h3>
                                <p className='text-[#368a2b]'>{review.property_title}</p>
                                <p className='text-justify'>{review.review_description}</p>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <button className="text-white bg-red-700 hover:bg-red-600 rounded-md p-2">Delete Review</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageReviews;