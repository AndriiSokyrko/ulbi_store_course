import {
    ADMIN_ROTE, ADMIN_ROUTE,
    BASKET_ROTE, BASKET_ROUTE,
    DEVICE_ROTE, DEVICE_ROUTE,
    LOGIN_ROTE,
    LOGIN_ROUTE,
    REGISTRATION_ROTE, REGISTRATION_ROUTE,
    SHOP_ROTE, SHOP_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

export const authRoutes=[
    {
        path: ADMIN_ROUTE,
        Comment: Admin
    },
    {
        path: BASKET_ROUTE,
        Comment: Basket
    }
]
export const publicRoutes =[
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]