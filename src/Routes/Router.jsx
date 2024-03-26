import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Error from "../Pages/Error/Error";
import Login from "../Components/Login/Login";
import Extra from "../Components/Extra/Extra";
import SingUp from "../Components/SingUp/SingUp";
import Gallery from "../Pages/Gallery/Gallery";
import TrainerPage from "../Pages/TrainerPage/TrainerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/trainer",
        element: <TrainerPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singUp",
    element: <SingUp />,
  },
  {
    path: "/extra",
    element: <Extra />,
  },
]);
