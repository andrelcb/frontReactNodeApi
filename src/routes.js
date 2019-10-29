import Main from './pages/main';
import Products from './pages/products';
import RegisterProducts from './pages/register-products';

const routes = [
    {
        path: "/main",
        name: "Main",
        component: Main,
        layout: "/admin"

    },
    {
        path: "/products/:id",
        name: "Products-Detais",
        component: Products,
        layout: "/admin"

    },
    {
        path: "/register-products",
        name: "Register Produtos",
        component: RegisterProducts,
        layout: "/admin"

    }
]

export default routes;