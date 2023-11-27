import { useLoaderData } from "react-router-dom";


const PropertyDetails = () => {
    const loadedProperty = useLoaderData();
    console.log(loadedProperty.data)
    const { _id, property_title, property_image, category, property_location, agent_name, agent_email, agent_image, price_range, description, bathroom, bedroom, balcony, area } = loadedProperty.data
    return (
        <div className="max-w-screen-xl px-5 lg:px-0 mx-auto pt-20">
            <h1 className="text-3xl text-center my-10 lg:text-5xl font-semibold">
                {property_title}
            </h1>
            <div className="grid lg:grid-cols-4 my-5 gap-7">
                <div className="lg:col-span-3">
                    <img src={property_image} className="w-full h-[50vh] md:h-[70vh] object-cover" alt="" />
                </div>
                <div className="space-y-4">
                    <p className="text-xl bg-green-500 w-max lg:w-full text-black p-2"><strong>Price:</strong> $ {price_range.lower_price} - {price_range.upper_price}</p>
                    <p className="text-lg"><strong>Category:</strong> {category}</p>
                    <p className="text-lg"><strong>Location:</strong> {property_location}</p>
                    <p className="text-lg"><strong>Agent:</strong> {agent_name}</p>
                    <p className="text-lg"><strong>Bedroom:</strong> {bedroom}</p>
                    <p className="text-lg"><strong>Bathroom:</strong> {bathroom}</p>
                    <p className="text-lg"><strong>Balcony:</strong> {balcony}</p>
                    <p className="text-lg"><strong>Area:</strong> {area}</p>
                    <p className="text-lg"><strong>Description:</strong> {description}</p>
                    <div>
                        <button className="text-black bg-yellow-400 hover:bg-yellow-500 font-semibold p-3 w-full text-center">Add to Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PropertyDetails;