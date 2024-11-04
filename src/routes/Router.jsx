import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import PreOrder from "../pages/PreOrder";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        //   loader: () => fetch("../../public/categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards></GadgetCards>,
            // loader: () => fetch("../../public/coffees.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetCards></GadgetCards>,
            // loader: () => fetch("../../public/coffees.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        //   loader: () => fetch("../../public/coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/preOrder",
        element: <PreOrder></PreOrder>,
      },
      //   {
      //     path: "/coffee/:id",
      //     element: <CoffeeDetails></CoffeeDetails>,
      //     loader: () => fetch("../../public/coffees.json"),
      //   },
    ],
  },
]);

export { router };
