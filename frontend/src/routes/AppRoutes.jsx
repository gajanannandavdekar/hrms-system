import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
