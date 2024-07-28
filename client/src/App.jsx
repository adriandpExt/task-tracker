/* eslint-disable react/prop-types */
import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "./pages/not-found/NotFound";
import { privateRoutes, publicRoutes } from "./routes/routeConfig";
import { useAuth } from "./hooks/useAuth";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./layout/Layout";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                <ProtectedRoute element={route.element} />
              </Layout>
            }
          />
        ))}

        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
