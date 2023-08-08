import { createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import MainLayouts from "./layouts/MainLayouts"
import Login from './pages/Login'
import Cities from './pages/Cities'
import CityDetail from './pages/CityDetail'
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
    { 
        path: '/',
        element: <MainLayouts />,
        children: [
            { path: '/', element: <Home />},
            { path: '/index', element: <Home />},
            { path: '/home', element: <Home />},
            { path: '/login', element: <Login />},
            { path: '/cities', element: <Cities />},
            { path: '/city/:city_id', element: <CityDetail />},
            { path: "/*", element: <NotFound />}
        ],
    },
]);

export default router