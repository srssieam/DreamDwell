import { useForm } from "react-hook-form"

const AddNewProperty = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }
    return (
        <div className="lg:px-4">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Add New Property</h1>
            <div className="my-5 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="propertyTitle" className="font-semibold text-xl">Title*</label><br />
                                <input {...register("propertyTitle", { required: true })} className="px-4 py-3 w-full mt-4 border " type="text" id="" placeholder="property title" />
                            </div>
                            <div>
                                <label htmlFor="propertyLocation" className="font-semibold text-xl">Location*</label><br />
                                <input {...register("propertyLocation", { required: true })} className="px-4 py-3 w-full mt-4 border " type="text" id="" placeholder="location" />
                            </div>
                            <div>
                                <label htmlFor="category" className="font-semibold text-xl">Category*</label><br />
                                <select  {...register("category", { required: true })} className="px-4 py-3 w-full mt-4 border ">
                                    <option disabled selected>category</option>
                                    <option value="salad">House</option>
                                    <option value="pizza">Apartment</option>
                                    <option value="dessert">Building</option>
                                    <option value="soup">Office</option>
                                    <option value="drink">Condominium</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="propertyImg" className="font-semibold text-xl">Property image*</label><br />
                                <input {...register('propertyImg', { required: true })} type="file" className="border file-input max-w-xs mx-4 my-3 w-full mt-4 text-gray-500 bg-green-500" />
                            </div>
                            <div>
                            <label htmlFor="priceRange" className="font-semibold text-xl">Price range*</label><br />
                                <div className="grid grid-cols-2 gap-2">
                                    <input {...register("lowerPrice", { required: true })} className="border px-4 py-3 w-full mt-4" type="number" id="" placeholder="Lower price" />
                                    <input {...register("upperPrice", { required: true })} className="border px-4 py-3 w-full mt-4" type="number" id="" placeholder="Upper price" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="area" className="font-semibold text-xl">Area sqft*</label><br />
                                <input {...register("area", { required: true })} className="border px-4 py-3 w-full mt-4" type="number" id="" placeholder="area sqft" />
                            </div>
                            <div>
                                <label htmlFor="bedRoom" className="font-semibold text-xl">Bedrooms*</label><br />
                                <input {...register('bedRoom', { required: true })} type="number" className="border px-4 py-3 w-full mt-4" id="" placeholder="total bedrooms" />
                            </div>
                            <div>
                                <label htmlFor="bathRoom" className="font-semibold text-xl">Bathrooms*</label><br />
                                <input {...register('bathRoom', { required: true })} type="number" className="border px-4 py-3 w-full mt-4" id="" placeholder="total bathrooms" />
                            </div>
                            <div>
                                <label htmlFor="balcony" className="font-semibold text-xl">balcony*</label><br />
                                <input {...register('balcony', { required: true })} type="number" className="border px-4 py-3 w-full mt-4" id="" placeholder="balcony" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="recipe" className="font-semibold text-xl">Short description*</label><br />
                        <textarea {...register('recipe', { required: true })} cols="30" rows="5" className="textarea resize-none textarea-bordered px-4 py-3 w-full mt-4" type="text" name="recipe" id="" placeholder="Recipe details" />
                    </div>
                    
                    <button type="submit" className="text-black text-xl font-semibold px-3 py-2 mt-6 bg-[#fff242] flex items-center gap-3">Add property</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewProperty;