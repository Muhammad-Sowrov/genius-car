import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import About from "../components/Pages/About";
import Login from "../components/Pages/Login";
import Checkout from "../components/Pages/Checkout";
import SignUp from "../components/Pages/SignUp";
import Bookings from "../components/Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


const Route = createBrowserRouter ([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/checkout/:id",
                element: <Checkout></Checkout>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
])

export default Route;