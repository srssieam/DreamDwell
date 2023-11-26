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
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
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
                path:'/dashboard/manageReviews',
                element:<ManageReviews></ManageReviews>
            }
        ]
    }
])

export default Router;