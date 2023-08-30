import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from './pages/Home';
import MainLayouts from "./layouts/MainLayouts";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail';
import NotFound from "./pages/NotFound";
import LoginLayout from "./layouts/LoginLayout";

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        // Rutas para el layout de MainLayouts
        element: <MainLayouts />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/index', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/cities', element: <Cities /> },
            { path: '/city/:city_id', element: <CityDetail /> },
            { path: '/*', element: <NotFound /> }
        ]
      },
      {
        // Rutas para el layout de LoginLayout
        element: <LoginLayout />,
        children: [
            { path: '/auth/signin', element: <SignIn /> },
            { path: '/auth/signup', element: <SignUp /> }
        ]
      }
    ]
  },
]);

export default router;
