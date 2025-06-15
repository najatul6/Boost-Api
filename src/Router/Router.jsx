import AuthLayout from "@/Layout/AuthLayout";
import DashboardLayout from "@/Layout/DashboardLayout";
import RootLayout from "@/Layout/RootLayout";
import LogIn from "@/pages/Common/Auth/LogIn";
import Register from "@/pages/Common/Auth/Register";
import Error from "@/pages/Common/Error/Error";
import UserAccount from "@/pages/Common/UserAccount/UserAccount";
import Overview from "@/pages/DashboardView/Overview/Overview";
import UserControls from "@/pages/DashboardView/UserControls/UserControls";
import About from "@/pages/RootView/About/About";
import Home from "@/pages/RootView/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import UnAuthorization from "@/pages/Common/UnAuthorization/UnAuthorization";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "my-profile",
        element: <PrivateRoute><UserAccount /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "users-control",
        element: <UserControls />,
      },
      {
        path: "my-profile",
        element: <UserAccount />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/un-auth",
    element: <UnAuthorization />,
  },
]);

export default Router;
