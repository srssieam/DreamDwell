import { ThreeCircles } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
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
    if (user) {
        return children;
    }
};

export default PrivateRoute;