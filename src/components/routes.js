import Login from "./pages/login";
import Parametre from "./pages/parametre";
import Numero from "./pages/numero";
import Confidentialite from "./pages/confidentialite";

const routes = [
    {
        path: "/",
        component: Parametre,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/numero",
        component: Numero,
    },
    {
        path: "/confidentialite",
        component: Confidentialite
    }
];

export default routes;