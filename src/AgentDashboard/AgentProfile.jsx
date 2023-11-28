import useAuth from "../hooks/useAuth";


const AgentProfile = () => {
    const { user } = useAuth();
    return (
        <div className="px-5">
            <h1 className="text-2xl lg:text-5xl text-center text-green-700 font-semibold italic my-3 lg:my-5">Agent Profile</h1>
            <div className="grid md:grid-cols-2 gap-8 border border-green-700 rounded-md p-4 md:p-8">
                <div className="space-y-3 flex flex-col justify-center items-center">
                    <img src={user.photoURL} className="w-40 h-40 object-cover rounded-full" alt="" />
                    <p className="text-2xl font-semibold">{user.displayName}</p>
                    <p className="text-xl font-semibold">Agent</p>
                </div>
                <div className="space-y-3 flex flex-col justify-center">
                    <p className="text-xl "><span className="font-semibold text-green-700">Full Name:</span> {user.displayName}</p>
                    <p className="text-xl "><span className="font-semibold text-green-700">Email:</span> {user.email}</p>
                    <p className="text-xl "><span className="font-semibold text-green-700">Role:</span> Agent</p>
                    <p className="text-xl "><span className="font-semibold text-green-700">User Id:</span> {user.uid}</p>
                    <p className="text-xl "><span className="font-semibold text-green-700">Created at:</span> {user.metadata.creationTime}</p>
                </div>
            </div>
        </div>
    );
};

export default AgentProfile;