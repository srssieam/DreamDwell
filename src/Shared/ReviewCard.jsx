

const ReviewCard = ({review}) => {
    return (
        <div className='flex flex-col justify-center items-center lg:flex-row gap-4'>
            <img src={review.image} className='w-20 h-20 object-cover rounded-full' alt="" />
            <div className='text-center lg:text-left'>
                <h3 className='text-2xl font-semibold'>{review.reviewer_name}</h3>
                <p className='text-[#368a2b]'>{review.property_title}</p>
                <p className='text-lg text-justify'>{review.review_description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;