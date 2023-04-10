import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = React.lazy(() => import("../pages/login/index"));
const Register = React.lazy(() => import("../pages/registration/index"));

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
