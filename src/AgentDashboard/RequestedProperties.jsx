import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const RequestedProperties = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: properties = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersOfferedProperties?email=${user?.email}`)
            return res.data
        }
    })

    const handleAccept = property =>{
        console.log('property to be accepted', property)

        Swal.fire({
            title: "Accept offer!",
            text: "Are you sure you want to accept this offer?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#00ad00",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {    
                axiosSecure.patch(`/offeredProperties/accept/${property._id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                        if(res.data.modifiedCount > 0){
                            Swal.fire({
                                title: "Offer accepted!",
                                text: `the offer has been Accepted.`,
                                icon: "success",
                                timer: 1500
                            }); 
                        }
                     })
            }
          });
    }

    const handleReject = property =>{
        console.log('property to be rejected', property)

        Swal.fire({
            title: "Reject offer!",
            text: "Are you sure you want to reject this offer?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#00ad00",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {    
                axiosSecure.patch(`/offeredProperties/reject/${property._id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                        if(res.data.modifiedCount > 0){
                            Swal.fire({
                                title: "Offer rejected!",
                                text: `the offer has been Rejected.`,
                                icon: "success",
                                timer: 1500
                            }); 
                        }
                     })
            }
          });
    }

    return (
        <div className="lg:px-5">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Property bought</h1>
            <div className="mb-4">
                <p className="text-lg ">Total properties bought: {properties.length}</p>
            </div>
            {
                properties?.map(property => {
                    return <div key={property._id} className="grid md:grid-cols-4 gap-6 border-b-2 border-t-2 items-center py-4">
                        <div>
                            <img src={property.property_image} className="w-full max-h-[200px] object-cover" alt="" />
                        </div>
                        <div>
                            <p><strong>Property:</strong> {property.property_title}</p>
                            <p><strong>Location:</strong> {property.property_location}</p>
                            <p><strong>Offered Price:</strong> {property.offered_amount}</p>
                        </div>
                        <div>
                            <p><strong>Buyer:</strong> {property.buyer_name}</p>
                            <p><strong>Email:</strong> {property.buyer_email}</p>
                        </div>
                        {
                            property.status === "accepted" ?
                            <div className="flex justify-center"><p className="text-green-700 font-semibold"> Accepted</p></div>
                            : property.status === "rejected" ?
                            <div className="flex justify-center"><p className="text-red-700 font-semibold"> Rejected</p></div>
                            :
                            <div className="flex flex-col gap-3 justify-center ">
                            <button onClick={()=>handleAccept(property)} className="py-2 px-3 rounded bg-green-700 md:mx-7 font-playpen text-white font-semibold">Accept</button>
                            <button onClick={()=>handleReject(property)} className="py-2 px-3 rounded bg-red-700 md:mx-7 font-playpen text-white font-semibold">Reject</button>
                        </div>
                        }
                        
                    </div>
                })
            }
        </div>
    );
};

export default RequestedProperties;