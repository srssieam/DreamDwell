import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OfferPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const loadedProperty = useLoaderData().data;
    console.log('property to be offered', loadedProperty)

    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD

    const onSubmit = async data => {
        console.log(data)
        const offered = parseFloat(data.offeredAmount)

        if(offered < loadedProperty.price_range.lower_price || offered > loadedProperty.price_range.upper_price){
            setErrorMessage('Please input an amount within the range specified by the agent.')
            return;
        }

        const offeredProperty = {
            _id: loadedProperty._id,
            offered_amount: offered,
            property_title: loadedProperty.property_title,
            property_location: loadedProperty.property_location,
            agent_name: loadedProperty.agent_name,
            buyer_name: user?.displayName,
            buyer_email: user?.email,
            status: 'pending',
            property_image: loadedProperty.property_image
        }

        const res = await axiosSecure.post('/allOfferedProperties', offeredProperty);
            console.log(res.data)
            if(res.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    title: "Property has been Offered!",
                    text: `${data.propertyTitle} Offered Successfully`,
                    icon: "success",
                    timer: 1500
                  });
            }
    }

    return (
        <div className="lg:px-4">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Update property</h1>
            <div className="my-5 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="propertyTitle" className="font-semibold text-xl">Title*</label><br />
                                <input {...register("propertyTitle", { required: true })} defaultValue={loadedProperty.property_title} readOnly className="px-4 py-3 w-full mt-4 border " type="text" id="" />
                            </div>
                            <div>
                                <label htmlFor="propertyLocation" className="font-semibold text-xl">Location*</label><br />
                                <input {...register("propertyLocation", { required: true })} defaultValue={loadedProperty.property_location} readOnly className="px-4 py-3 w-full mt-4 border " type="text" id="" placeholder="location" />
                            </div>

                            <div>
                                <label htmlFor="agentName" className="font-semibold text-xl">Agent Name*</label><br />
                                <input {...register("agentName", { required: true })} defaultValue={loadedProperty.agent_name} readOnly className="px-4 py-3 w-full mt-4 border text-green-700" type="text" id="" />
                            </div>

                            <div>
                                <label htmlFor="offeredAmount" className="font-semibold text-xl">Offered Amount*</label><br />
                                <input {...register("offeredAmount", { required: true })}  defaultValue={loadedProperty.agent_name} className="px-4 py-3 w-full mt-4 border text-green-700" type="number" id="" />
                                <span className="text-red-700">{errorMessage}</span>
                            </div>

                            <div>
                                <label htmlFor="buyerName" className="font-semibold text-xl">Buyer Name*</label><br />
                                <input {...register("buyerName", { required: true })} defaultValue={user?.displayName} readOnly className="px-4 py-3 w-full mt-4 border" type="text" id="" />
                            </div>

                            <div>
                                <label htmlFor="buyerEmail" className="font-semibold text-xl">Buyer Email*</label><br />
                                <input {...register("buyerEmail", { required: true })} defaultValue={user?.email} readOnly className="px-4 py-3 w-full mt-4 border" type="text" id="" />
                            </div>

                            <div>
                                <label htmlFor="buyingDate" className="font-semibold text-xl">Buying Date*</label><br />
                                <input {...register("buyingDate", { required: true })} defaultValue={formattedDate} className="px-4 py-3 w-full mt-4 border" type="date" id="" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="text-black font-semibold px-3 py-2 mt-6 bg-[#e9c835] hover:bg-[#f7da5d] flex items-center rounded gap-3">Offer property</button>
                </form>
            </div>
        </div>
    );
};

export default OfferPage;
