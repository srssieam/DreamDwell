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
import PaymentPage from "../UserDashboard/PaymentPage";
import AdminRout from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import MySoldProperty from "../AgentDashboard/MySoldProperty";
import AboutUs from "../Components/AboutUs/AboutUs";


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
                loader: ({params})=> axios.get(`https://dream-dwell-server.vercel.app/v1/api/allVerifiedProperties/${params.id}`)
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'aboutUs',
                element:<AboutUs></AboutUs>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            // admin only
            {
                path:'/dashboard/adminProfile',
                element:<AdminRout><AdminProfile></AdminProfile></AdminRout>
            },
            {
                path:'/dashboard/manageUsers',
                element:<AdminRout><ManageUser></ManageUser></AdminRout>
            },
            {
                path:'/dashboard/manageProperties',
                element:<AdminRout><ManageProperties></ManageProperties></AdminRout>
            },
            {
                path:'/dashboard/manageReviews',
                element:<AdminRout><ManageReviews></ManageReviews></AdminRout>
            },
            {
                path:'/dashboard/advertise',
                element:<AdminRout><AdvertiseProperty></AdvertiseProperty></AdminRout>
            },

            // agent only
            {
                path:'/dashboard/agentProfile',
                element:<AgentRoute><AgentProfile></AgentProfile></AgentRoute>
            },
            {
                path:'/dashboard/myAddedProperties',
                element:<AgentRoute><MyAddedProperty></MyAddedProperty></AgentRoute>,
            },
            {
                path:'/dashboard/addNewProperty',
                element:<AgentRoute><AddNewProperty></AddNewProperty></AgentRoute>
            },
            {
                path:'/dashboard/updateProperty/:id',
                element:<AgentRoute><UpdateProperty></UpdateProperty></AgentRoute>,
                loader: ({params})=> axios.get(`https://dream-dwell-server.vercel.app/v1/api/agentAddedProperties/${params.id}`, {withCredentials:true})
            },
            {
                path:'/dashboard/myRequestedProperties',
                element:<AgentRoute><RequestedProperties></RequestedProperties></AgentRoute>
            },
            {
                path:'/dashboard/mySoldProperties',
                element:<AgentRoute><MySoldProperty></MySoldProperty></AgentRoute>
            },

            // user only
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
                loader: ({params})=> axios.get(`https://dream-dwell-server.vercel.app/v1/api/wishlist/${params.id}`, {withCredentials:true})
            },
            {
                path:'/dashboard/propertyBought',
                element:<PropertyBought></PropertyBought>
            },
            {
                path:'/dashboard/myReviews',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/dashboard/paymentPage/:id',
                element:<PaymentPage></PaymentPage>,
                loader: ({params})=> axios.get(`https://dream-dwell-server.vercel.app/v1/api/usersOfferedProperties/${params.id}`, {withCredentials:true})
            }
        ]
    }
])

export default Router;