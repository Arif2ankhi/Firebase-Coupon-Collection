
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../components/Home/Home';
import Brands from '../components/Brands/Brands';
import MyProfile from '../components/MyProfile/MyProfile';
import AboutDev from '../components/AboutDev/AboutDev';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import BrandDetails from '../components/BrandDetails/BrandDetails';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';
import PrivateRoute from './routes/PrivateRoute';
import CouponPage from '../components/CouponPage/CouponPage';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';


const router = createBrowserRouter([
    {
       path: "/",
       element: <MainLayout></MainLayout>,
       errorElement:<ErrorPage></ErrorPage>,
       children: [
        {
            path: "/",
            element:<Home></Home>,
            loader:() => fetch("/service.json")
        },
        {
            path:'services/:_id',
            element:<BrandDetails></BrandDetails>,
            loader: () => fetch ('/service.json')
        },
        {
            path:"/brands",
            element:<Brands></Brands>,
            loader: () => fetch("/service.json")
        },
        {
            // path: "/brand/:id",
            // element: <PrivateRoute><CouponPage /></PrivateRoute>,
            // loader: () => fetch("/service.json") 
            path: "/brand/:id",
                element: <PrivateRoute><CouponPage /></PrivateRoute>,
                loader: async ({ params }) => {
                    const response = await fetch("/service.json");  // Fetch full data
                    const data = await response.json();
                    return data.find(brand => brand._id === params.id); // Find the specific brand
                }
            
            
          },

        {
            path:"/myProfile",
            element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
            path:"/updateProfile",
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>        },
        {
            path:"/aboutDev",
            element:<AboutDev></AboutDev>
        },
        {
         path:"/register",
         element:<Register></Register> 
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/forgotPassword",
            element:<ForgotPassword></ForgotPassword>
        },
        {
            
        }
       ]
    }
]);

export default router;