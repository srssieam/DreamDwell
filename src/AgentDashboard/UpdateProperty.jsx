import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProperty = () => {
    const loadedProperty = useLoaderData().data;
    // console.log(loadedProperty)

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async data => {
        console.log(data)

        const imageFile = { image: data.propertyImg[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        const UploadedPhotoUrl = res.data.data.display_url
        console.log(UploadedPhotoUrl)

        const updatedProperty = {
            property_image: UploadedPhotoUrl,
            property_title: data.propertyTitle,
            category: data.category,
            property_location: data.propertyLocation,
            agent_name: user?.displayName,
            agent_email: user?.email,
            agent_image: user?.photoURL,
            price_range: {
                upper_price: data.upperPrice,
                lower_price: data.lowerPrice
            },
            description: data.description,
            bathroom: data.bathRoom,
            bedroom: data.bedRoom,
            balcony: data.balcony,
            area: `${data.propertyArea} sqft`
        }

        if (res.data.success) {
            const propertyRes = await axiosSecure.patch(`/agentAddedProperties/${loadedProperty._id}`, updatedProperty);
            console.log(propertyRes.data)
            if (propertyRes.data.modifiedCount) {
                // show success popup
                reset();
                Swal.fire({
                    title: "Property updated!",
                    text: `${data.propertyTitle} updated Successfully`,
                    icon: "success",
                    timer: 1500
                });
            }
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
                                <input {...register("propertyTitle", { required: true })} defaultValue={loadedProperty.property_title} className="px-4 py-3 w-full mt-4 border " type="text" id="" />
                            </div>
                            <div>
                                <label htmlFor="propertyLocation" className="font-semibold text-xl">Location*</label><br />
                                <input {...register("propertyLocation", { required: true })} defaultValue={loadedProperty.property_location} className="px-4 py-3 w-full mt-4 border " type="text" id="" placeholder="location" />
                            </div>
                            <div>
                                <label htmlFor="category" className="font-semibold text-xl">Category*</label><br />
                                <select  {...register("category", { required: true })} defaultValue={loadedProperty.category} className="px-4 py-3 w-full mt-4 border ">
                                    <option disabled selected>category</option>
                                    <option value="House">House</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Building">Building</option>
                                    <option value="Office">Office</option>
                                    <option value="Condominium">Condominium</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="propertyImg" className="font-semibold text-xl">Property image*</label><br />
                                <input {...register('propertyImg', { required: true })} type="file" className="border file-input max-w-xs mx-4 my-3 w-full mt-4 text-gray-500 bg-green-500" />
                            </div>
                            <div>
                                <label htmlFor="agentName" className="font-semibold text-xl">Agent Name*</label><br />
                                <input {...register("agentName", { required: true })} defaultValue={loadedProperty.agent_name} readOnly className="px-4 py-3 w-full mt-4 border text-green-700" type="text" id="" />
                            </div>
                            <div>
                                <label htmlFor="agentEmail" className="font-semibold text-xl">Agent email*</label><br />
                                <input {...register("agentEmail", { required: true })} defaultValue={loadedProperty.agent_email} readOnly className="px-4 py-3 w-full mt-4 border text-green-700" type="email" id="" />
                            </div>
                            <div>
                                <label htmlFor="priceRange" className="font-semibold text-xl">Price range*</label><br />
                                <div className="grid grid-cols-2 gap-2">
                                    <input {...register("lowerPrice", { required: true })} defaultValue={loadedProperty.price_range.lower_price} className="border px-4 py-3 w-full mt-4" type="number" id="" />
                                    <input {...register("upperPrice", { required: true })} defaultValue={loadedProperty.price_range.upper_price} className="border px-4 py-3 w-full mt-4" type="number" id=""  />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="propertyArea" className="font-semibold text-xl">Area sqft*</label><br />
                                <input {...register("propertyArea", { required: true })} defaultValue={loadedProperty.area} type="text" className="border px-4 py-3 w-full mt-4" id="" />
                            </div>
                            <div>
                                <label htmlFor="bedRoom" className="font-semibold text-xl">Bedrooms*</label><br />
                                <input {...register('bedRoom', { required: true })} defaultValue={loadedProperty.bedroom} type="number" className="border px-4 py-3 w-full mt-4" id="" />
                            </div>
                            <div>
                                <label htmlFor="bathRoom" className="font-semibold text-xl">Bathrooms*</label><br />
                                <input {...register('bathRoom', { required: true })} defaultValue={loadedProperty.bathroom} type="number" className="border px-4 py-3 w-full mt-4" id="" />
                            </div>
                            <div>
                                <label htmlFor="balcony" className="font-semibold text-xl">balcony*</label><br />
                                <input {...register('balcony', { required: true })} defaultValue={loadedProperty.balcony} type="number" className="border px-4 py-3 w-full mt-4" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="description" className="font-semibold text-xl">Short description*</label><br />
                        <textarea {...register('description', { required: true })} defaultValue={loadedProperty.description} cols="30" rows="5" className="textarea resize-none textarea-bordered px-4 py-3 w-full mt-4" type="text" id="" />
                    </div>

                    <button type="submit" className="text-black text-xl font-semibold px-3 py-2 mt-6 bg-[#fff242] flex items-center gap-3">Update property</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProperty;