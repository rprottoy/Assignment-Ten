import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import BrowseCars from "../Pages/BrowseCars/BrowseCars";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddCar from "../Pages/AddCar/AddCar";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyListings from "../Pages/MyListings/MyListings";
import PrivateRoute from "./PrivateRoute";
import CarDetails from "../Pages/CarDetails/CarDetails";
import CarNotFound from "../Pages/CarNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/browseCars",
        Component: BrowseCars,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Register,
      },
      {
        path: "/addCar",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/myListings",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/car-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/car-details/${params.id}`),
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/car-not-found",
        Component: CarNotFound,
      },
    ],
  },
]);
