import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contract from "../pages/Contract";
import Register from "../pages/Register";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import RegisterOpen from "../pages/RegisterOpen";
import CreateContract from "../pages/CreateContract";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/create/search",
        element: <Contract />,
      },
      {
        path: "/create/contract",
        element: <CreateContract />,
      },
      {
        path: "/create/confirm/:id",
        element: <CreateContract />,
      },
      {
        path: "/create/receipt",
        element: <CreateContract />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/register/open",
        element: <RegisterOpen />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
