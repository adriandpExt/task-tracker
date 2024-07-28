import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

import Dashboard from "../pages/dashboard/Dashboard";

export const publicRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/tasks",
    element: <>TASK</>,
  },
];
