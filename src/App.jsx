import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from "./pages/PageNotFound"; 
import EmployeeAttendanceList from "./pages/EmployeeAttendanceList"; 
import BreakTimeByEmployeeList from "./pages/BreakTimeByEmployeeList"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // Common layout (Header + Footer)
    children: [
      { index: true, element: <Home /> },  // Default route "/"
      { path: "break-time-by-employee-list", element: <BreakTimeByEmployeeList /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,   // Common layout (Header + Footer)
    children: [
      { index: true, element: <Home /> },  // Default route "/"
      { path: "employee-attendance-list", element: <EmployeeAttendanceList /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,   // Login ke liye alag layout
    children: [
      { index: true, element: <Login /> },
    ],
  },
  {
    path: "*", // agar bilkul unknown path hai
    element: <PageNotFound />,
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App
