import { RiDeleteBin6Line } from "react-icons/ri";
import useProperty from "../hooks/useProperty";
import { MdLocationPin } from "react-icons/md";

const ManageProperties = () => {
    const [properties] = useProperty();
    return (
        <div className="px-5">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic lg:my-5">Manage Properties</h1>
            <p className="text-lg mb-4">Total Properties: {properties.length}</p>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-black">
                        <tr className="text-xl text-yellow-400 font-semibold ">
                            <th></th>
                            <th>Property</th>
                            <th>Agent</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            properties.map((property, idx)=> <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>
                                    <p className="text-lg font-semibold">{property.property_title}</p>
                                    <p className="text-green-700 flex"><MdLocationPin className="text-xl"></MdLocationPin> {property.property_location}</p>
                                    <p>{property.price_range.lower_price} $ - {property.price_range.upper_price} $</p>
                                </td>
                                <td>
                                    <p className="text-lg">{property.agent_name}</p>
                                    <p>{property.agent_email}</p>
                                </td>
                                <td className="flex flex-col justify-center items-center gap-2">
                                    <button className="px-2 py-1 bg-green-700 hover:bg-green-600 rounded-md font-semibold text-white">Verify</button>
                                    <button className="px-2 py-1 bg-red-700 hover:bg-red-600 rounded-md font-semibold text-white">Reject</button>
                                </td>
                                <td>
                                    <button className="p-2 rounded-md hover:bg-red-500 text-2xl text-white bg-red-700"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageProperties;