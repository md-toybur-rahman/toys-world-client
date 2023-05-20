import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Accessabilities/Login/Login";
import SignUp from "../Accessabilities/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import AddNewToy from "../Pages/AddNewToy/AddNewToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toys-world-server.vercel.app/toys')
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddNewToy></AddNewToy></PrivateRoute>
            },
            {
                path: '/updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://toys-world-server.vercel.app/toyDetails/${params.id}`)
            },
            {
                path: '/toyDetails/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({ params }) => fetch(`https://toys-world-server.vercel.app/toyDetails/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    }
]);


export default router;