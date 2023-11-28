import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic"
import Swal from "sweetalert2";
import useWishlist from "../hooks/useWishlist";


const PropertyDetails = () => {
    const {user} = useAuth();
    const [wishlist, refetch] = useWishlist();
    const axiosPublic = useAxiosPublic();
    const loadedProperty = useLoaderData();
    console.log('wishlist',wishlist)
    const { _id, property_title, property_image, category, property_location, agent_name, agent_email, agent_image, price_range, description, bathroom, bedroom, balcony, area } = loadedProperty.data

    const wishlistProperty = {
        buyerEmail: user?.email,
        property_title,
        property_image,
        category,
        property_location,
        agent_name,
        agent_email,
        agent_image,
        price_range,
    }

    const handleAddToWishlist = () =>{

        if (wishlist.find(wishlistProperty => wishlistProperty.property_title === property_title)){
            Swal.fire({
                title: "failed!",
                text: `you have already added this property`,
                icon: "warning",
              });
            return;
        }
  
            axiosPublic.post(`/wishlist`, wishlistProperty)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    refetch();
                    Swal.fire({
                        title: "Item added!",
                        text: `${property_title} added to your wishlist`,
                        icon: "success",
                        timer: 1500
                      });
                }
            })
        
    }

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
                        <button onClick={handleAddToWishlist} className="text-black bg-yellow-400 hover:bg-yellow-500 font-semibold p-3 w-full text-center">Add to Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PropertyDetails;