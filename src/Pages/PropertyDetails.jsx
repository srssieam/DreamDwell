import { useLoaderData } from "react-router-dom";


const PropertyDetails = () => {
    const loadedProperty = useLoaderData();
    console.log(loadedProperty.data)
    return (
        <div>
            
        </div>
    );
};

export default PropertyDetails;