import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/classes",
        element:<Classes/>
      }
    ],
  },
]);
