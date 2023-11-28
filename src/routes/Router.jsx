import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import ManageUser from "../AdminDashboard/ManageUser";
import ManageReviews from "../AdminDashboard/ManageReviews";
import AdminProfile from "../AdminDashboard/AdminProfile";
import ManageProperties from "../AdminDashboard/ManageProperties";
import AllProperty from "../Pages/AllProperty";
import PropertyDetails from "../Pages/PropertyDetails";
import axios from "axios";
import AdvertiseProperty from "../AdminDashboard/AdvertiseProperty";
import AgentProfile from "../AgentDashboard/AgentProfile";
import MyAddedProperty from "../AgentDashboard/MyAddedProperty";
import AddNewProperty from "../AgentDashboard/AddNewProperty";
import UpdateProperty from "../AgentDashboard/UpdateProperty";
import UserProfile from "../UserDashboard/UserProfile";
import MyWishlist from "../UserDashboard/MyWishlist";
import OfferPage from "../UserDashboard/OfferPage";
import PropertyBought from "../UserDashboard/PropertyBought";
import RequestedProperties from "../AgentDashboard/RequestedProperties";
import MyReviews from "../UserDashboard/MyReviews";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'allProperty',
                element:<AllProperty></AllProperty>
            },
            {
                path:'propertyDetails/:id',
                element:<PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: ({params})=> axios.get(`http://localhost:5000/v1/api/allVerifiedProperties/${params.id}`)
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard/adminProfile',
                element:<AdminProfile></AdminProfile>
            },
            {
                path:'/dashboard/manageUsers',
                element:<ManageUser></ManageUser>
            },
            {
                path:'/dashboard/manageProperties',
                element:<ManageProperties></ManageProperties>
            },
            {
                path:'/dashboard/manageReviews',
                element:<ManageReviews></ManageReviews>
            },
            {
                path:'/dashboard/advertise',
                element:<AdvertiseProperty></AdvertiseProperty>
            },
            {
                path:'/dashboard/agentProfile',
                element:<AgentProfile></AgentProfile>
            },
            {
                path:'/dashboard/myAddedProperties',
                element:<MyAddedProperty></MyAddedProperty>,
            },
            {
                path:'/dashboard/addNewProperty',
                element:<AddNewProperty></AddNewProperty>
            },
            {
                path:'/dashboard/updateProperty/:id',
                element:<UpdateProperty></UpdateProperty>,
                loader: ({params})=> axios.get(`http://localhost:5000/v1/api/agentAddedProperties/${params.id}`)
            },
            {
                path:'/dashboard/myRequestedProperties',
                element:<RequestedProperties></RequestedProperties>
            },
            {
                path:'/dashboard/userProfile',
                element:<UserProfile></UserProfile>
            },
            {
                path:'/dashboard/wishlist',
                element:<MyWishlist></MyWishlist>
            },
            {
                path:'/dashboard/offerPage/:id',
                element:<OfferPage></OfferPage>,
                loader: ({params})=> axios.get(`http://localhost:5000/v1/api/wishlist/${params.id}`)
            },
            {
                path:'/dashboard/propertyBought',
                element:<PropertyBought></PropertyBought>
            },
            {
                path:'/dashboard/myReviews',
                element:<MyReviews></MyReviews>
            }
        ]
    }
])

export default Router;