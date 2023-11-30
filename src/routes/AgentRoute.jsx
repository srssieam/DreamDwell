import { ThreeCircles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAgent from "../hooks/useAgent";

const AdminRout = ({children}) => {
    const {user, loading}= useAuth();
    const [isAgent, isAgentLoading] = useAgent();
    const location = useLocation();
    if (loading || isAgentLoading) {
        return <div className="flex justify-center items-center h-[100vh]">
        <ThreeCircles
            height="200"
            width="200"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor="#ffee00"
            middleCircleColor=""
        />
    </div>
    }
    if (user && isAgent) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRout;