import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import MyProfile from "../Components/MyProfile/MyProfile";
import Home from "../Components/Home/Home";
import ServiceDetails from "../Components/Home/Serives/ServiceDetails";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import PrivateRoute from "../Components/Routes/PrivateRoute";
import Offers from "../Components/Offers/Offers";
import ForgotPassword from "../Components/Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch("/services.json");
          const services = await response.json();
          return services.find((service) => service.id === Number(params.id));
        },
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/offers",
        element: (
          <PrivateRoute>
            <Offers></Offers>
          </PrivateRoute>
        ),
      },
      {
        path:"/forgotPassword",
        element:<ForgotPassword></ForgotPassword>
      }
    ],
  },
]);

export default router;
