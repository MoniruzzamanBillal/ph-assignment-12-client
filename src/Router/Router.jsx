import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import BookParcel from "../Components/Dashboard/BookParcel";
import MyParcel from "../Components/Dashboard/MyParcel";
import MyProfile from "../Components/Dashboard/MyProfile";
import AllParcel from "../Components/Dashboard/admin/AllParcel";
import AllDeliveryMan from "../Components/Dashboard/admin/AllDeliveryMan";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/myparcel",
        element: <MyParcel />,
      },
      {
        path: "/dashboard/bookparcel",
        element: <BookParcel />,
      },
      {
        path: "/dashboard/myprofile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/statistics",
        element: <p> book parcel </p>,
      },
      {
        path: "/dashboard/parcels",
        element: <AllParcel />,
      },
      {
        path: "/dashboard/users",
        element: <p>all users </p>,
      },
      {
        path: "/dashboard/deliverymans",
        element: <AllDeliveryMan />,
      },
    ],
  },
]);

export default Router;
