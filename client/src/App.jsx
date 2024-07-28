import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import { privateRoutes, publicRoutes } from "./routes/routeConfig";
import Layout from "./layout/Layout";
import { useAuth } from "./hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/" />
  );
};

const App = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      <Route element={<ProtectedRoute />}>
        {privateRoutes.map((route) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
