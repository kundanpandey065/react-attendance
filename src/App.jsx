import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./userpages/usercomponents/Layout";
import AuthLayout from "./userpages/usercomponents/AuthLayout";
import Home from './websitepages/Home';
import About from './websitepages/About';
import VersionUpdate from './websitepages/VersionUpdate';
import Contact from './websitepages/Contact';
import Dashboard from './userpages/Dashboard';
import Login from './userpages/Login';
import PageNotFound from "./userpages/PageNotFound"; 
import EmployeeAttendanceList from "./userpages/EmployeeAttendanceList"; 
import BreakTimeByEmployeeList from "./userpages/BreakTimeByEmployeeList"; 
import FrontLayout from "./websitepages/websitelayout/FrontLayout";




const router = createBrowserRouter([

 
  // {
  //   path: "/",
  //   element: <FrontLayout />,  
  //   children: [
  //     { index: true, element: <Home /> },
  //   ],
  // },

  {
    path: "/",
    element: <FrontLayout />,   // Common layout (Header + Footer)
    children: [
      { index: true, element: <Home /> },  // Default route "/"
      { path: "about", element: <About /> },
      { path: "version-update", element: <VersionUpdate /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },



  {
    path: "/user",
    element: <Layout />,   // Common layout (Header + Footer)
    children: [
      { index: true, element: <Dashboard /> },  // Default route "/"
      { path: "break-time-by-employee-list", element: <BreakTimeByEmployeeList /> },
      { path: "employee-attendance-list", element: <EmployeeAttendanceList /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },



  // {
  //   path: "/dashboard",
  //   element: <Layout />,
  //   children: [
  //     { index: true, element: <Dashboard /> },  
  //   ],
  // },
  // {
  //   path: "/break-time-by-employee-list",
  //   element: <Layout />,   // Common layout (Header + Footer)
  //   children: [
  //     { index: true, element: <BreakTimeByEmployeeList /> },  // Default route "/"
  //     // { path: "break-time-by-employee-list", element: <BreakTimeByEmployeeList /> },
  //     // { path: "*", element: <PageNotFound /> },
  //   ],
  // },
  // {
  //   path: "/employee-attendance-list",
  //   element: <Layout />,   // Common layout (Header + Footer)
  //   children: [
  //     { index: true, element: <EmployeeAttendanceList /> },  // Default route "/"
  //     // { path: "employee-attendance-list", element: <EmployeeAttendanceList /> },
  //     // { path: "*", element: <PageNotFound /> },
  //   ],
  // },
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
