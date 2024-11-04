import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import GadgetCards from "../components/GadgetCards";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import PreOrder from "../pages/PreOrder";
import AllGadgets from "../components/AllGadgets";
import GadgetDetails from "../pages/GadgetDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../category.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "allGadgets",
            element: <AllGadgets></AllGadgets>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "preOrder",
        element: <PreOrder></PreOrder>,
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("../gadgets.json"),

      },
    ],
  },
]);

export { routes };
