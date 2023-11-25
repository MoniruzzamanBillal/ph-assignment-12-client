import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import BookParcel from "../Components/Dashboard/BookParcel";

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
        path: "/dashboard/",
        element: <p> book parcel </p>,
      },
      {
        path: "/dashboard/myparcel",
        element: <p> My parcel </p>,
      },
      {
        path: "/dashboard/bookparcel",
        element: <BookParcel />,
      },
      {
        path: "/dashboard/myprofile",
        element: <p> My profile </p>,
      },
    ],
  },
]);

export default Router;
