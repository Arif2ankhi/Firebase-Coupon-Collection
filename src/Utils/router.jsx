
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../components/Home/Home';
import Brands from '../components/Brands/Brands';
import MyProfile from '../components/MyProfile/MyProfile';
import AboutDev from '../components/AboutDev/AboutDev';


const router = createBrowserRouter([
    {
       path: "/",
       element: <MainLayout></MainLayout>,
       children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path:"/brands",
            element:<Brands></Brands>
        },
        {
            path:"/myProfile",
            element:<MyProfile></MyProfile>
        },
        {
            path:"/aboutDev",
            element:<AboutDev></AboutDev>
        }
       ]
    }
]);

export default router;