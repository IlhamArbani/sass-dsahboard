import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import { Dashboard, SignUp } from "../pages";
import { BaseLayout } from "../layout";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/',
    element: <BaseLayout/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      }
    ]
  }
]);

export default router;