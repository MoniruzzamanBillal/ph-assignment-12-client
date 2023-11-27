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
import AllUsers from "../Components/Dashboard/admin/AllUsers";
import UpdateParcel from "../Components/Dashboard/UpdateParcel";
import Test from "../Components/Loading/Test";
import MyDelivery from "../Components/Dashboard/DeliveryMan/MyDelivery";
import MyReview from "../Components/Dashboard/DeliveryMan/MyReview";

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
    path: "/test",
    element: <Test />,
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
        path: "/dashboard/updateparcel/:id",
        element: <UpdateParcel />,
      },
      {
        path: "/dashboard/myprofile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/statistics",
        element: <p> Statistics </p>,
      },
      {
        path: "/dashboard/parcels",
        element: <AllParcel />,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/deliverymans",
        element: <AllDeliveryMan />,
      },
      {
        path: "/dashboard/mydelivery",
        element: <MyDelivery />,
      },
      {
        path: "/dashboard/myreview",
        element: <MyReview />,
      },
    ],
  },
]);

export default Router;
