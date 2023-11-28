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
import PrivateRoute from "./PrivateRoute";

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
    // element: <Dashboard />,
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard />{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myparcel",
        element: (
          <PrivateRoute>
            {" "}
            <MyParcel />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/bookparcel",
        element: (
          <PrivateRoute>
            {" "}
            <BookParcel />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updateparcel/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateParcel />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myprofile",
        element: (
          <PrivateRoute>
            {" "}
            <MyProfile />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/statistics",
        element: (
          <PrivateRoute>
            {" "}
            <p> Statistics </p>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/parcels",
        element: (
          <PrivateRoute>
            {" "}
            <AllParcel />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <PrivateRoute>
            {" "}
            <AllUsers />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/deliverymans",
        element: (
          <PrivateRoute>
            {" "}
            <AllDeliveryMan />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/mydelivery",
        element: (
          <PrivateRoute>
            {" "}
            <MyDelivery />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myreview",
        element: (
          <PrivateRoute>
            {" "}
            <MyReview />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
