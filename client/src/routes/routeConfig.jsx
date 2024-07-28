import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import Tasks from "../pages/tasks/Tasks";

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
    label: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/tasks",
    label: "View Tasks",
    element: <Tasks />,
  },
  {
    path: "/profile",
    label: "Profile",
    element: <>PROFILE</>,
  },
  {
    path: "/settings",
    label: "Settings",
    element: <>SETTINGS</>,
  },
];
