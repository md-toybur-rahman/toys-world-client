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
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/myToys',
                element: <h2>My Toys</h2>
            },
            {
                path: '/addToy',
                element: <AddNewToy></AddNewToy>
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