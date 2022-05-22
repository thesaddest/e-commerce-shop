import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    CHECKOUT_SUCCESS,
    ITEM_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin/Admin";
import Basket from "./pages/Basket/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth/Auth";
import ItemPage from "./pages/ItemPage/ItemPage";
import CheckoutSuccess from "./components/CheckoutSuccess/CheckoutSuccess";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
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
        path: ITEM_ROUTE +'/:id',
        Component: ItemPage
    },
    {
        path: CHECKOUT_SUCCESS,
        Component: CheckoutSuccess
    }
]

export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
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
        path: ITEM_ROUTE +'/:id',
        Component: ItemPage
    },
    {
        path: CHECKOUT_SUCCESS,
        Component: CheckoutSuccess
    }

]