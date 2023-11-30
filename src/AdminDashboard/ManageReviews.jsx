import Swal from "sweetalert2";
import useReviews from "../hooks/useReviews";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const ManageReviews = () => {
    const [reviews, refetch] = useReviews();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (review) =>{
        console.log('comment to delete', review)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {    
                axiosSecure.delete(`/reviews/${review._id}`)
                    .then(res =>{
                        // console.log(res.data);
                        refetch()
                        if(res.data.deletedCount > 0){
                            Swal.fire({
                                title: "Review Deleted!",
                                text: "The review has been deleted.",
                                icon: "success"
                            });
                        }
                })
            }
          });
    }

    return (
        <div className="px-5">
            <Helmet>
                <title>DreamDwell | Manage Reviews</title>
            </Helmet>
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
                            <button onClick={()=>handleDelete(review)} className="text-white bg-red-700 hover:bg-red-600 rounded-md p-2">Delete Review</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageReviews;